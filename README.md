# Cypress E-Commerce Test Framework

An end-to-end testing framework built with Cypress and TypeScript for testing an e-commerce application. The framework implements the Page Object Model (POM) pattern, utilizes data factories for test data generation, and supports both UI and API testing.

## 🌟 Features

- TypeScript implementation with strict type checking
- Page Object Model pattern with base page implementation
- Data Factory pattern using @faker-js/faker
- Custom Cypress commands for API operations
- Type definitions for better code completion
- Mochawesome reporting with automatic cleanup
- ESLint + Prettier code formatting
- Husky pre-commit hooks
- Smart video recording management

## 🛠 Setup

### Prerequisites

- Node.js (Latest LTS version)
- Git
- VS Code (Recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/prudhvidandamudi/cypress-ecommerce-framework.git

# Navigate to project directory
cd cypress-ecommerce-framework

# Install dependencies
npm install
```

## 🧹 Development Setup & Code Quality

### VS Code Extensions

Install the following VS Code extensions for the best development experience:

- ESLint
- Prettier - Code formatter
- TypeScript + JavaScript
- Cypress Snippets

### Code Formatting

The project uses Prettier with the following configuration (.prettierrc):

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "es5",
  "arrowParens": "always",
  "bracketSpacing": true,
  "endOfLine": "lf",
  "useTabs": false,
  "quoteProps": "as-needed"
}
```

### ESLint Configuration

ESLint is configured to work with TypeScript and Cypress, key features include:

- TypeScript parsing and linting
- Cypress-specific rules
- Prettier integration

```javascript
// .eslintrc.mjs
export default [
  pluginCypress.configs.recommended,
  {
    files: ['**/*.ts'],
    plugins: {
      '@typescript-eslint': pluginTypescript,
      cypress: pluginCypress,
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prefer-const': 'error',
      'no-console': 'warn',
    },
  },
];
```

### VS Code Settings

For consistent formatting, add these to your VS Code settings.json:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Git Hooks with Husky

The project uses Husky for Git hooks to ensure code quality:

1. **Pre-commit Hook**: Runs ESLint and Prettier

```bash
# Install Husky
npm install husky --save-dev

# Initialize Husky
npm run prepare

# Add pre-commit hook for lint-staged
npx husky add .husky/pre-commit "npx lint-staged"
```

Lint-staged configuration in package.json:

```json
"lint-staged": {
  "cypress/**/*.ts": [
    "prettier --write",
    "eslint --max-warnings=5"
  ],
  "*.{json,md}": [
    "prettier --write"
  ]
}
```

## 🚀 Running Tests

### Local Execution

```bash
# Run all tests with cleanup and reports
npm run test

# Run tests in Chrome browser
npm run test:chrome

# Run specific test file
npx cypress run --spec "cypress/e2e/user-login-logout.cy.ts"
```

### Test Reports

After test execution, find the HTML report at:

```
cypress/reports/html/index.html
```

## 📝 Best Practices for UI Tests

### Key Principles

1. **Use API Calls for Test Data Setup/Cleanup**

   - Use API commands for creating and deleting test data instead of UI flows
   - Speeds up test execution
   - Increases test reliability
   - Separates test data management from UI testing

   ```typescript
   // Good Practice
   beforeEach(() => {
     userData = DataFactory.generateUserData();
     cy.createUserViaApi(userData); // Fast API setup
   });

   afterEach(() => {
     cy.deleteUserViaApi(userData); // Clean API cleanup
   });

   // Avoid
   beforeEach(() => {
     // Don't create test data through UI
     cy.visit('/register');
     cy.fillRegistrationForm(userData);
   });
   ```

2. **Implement Page Object Model Effectively**

   - Each page should have its own class
   - Use method chaining for better readability
   - Return page objects for navigation flows
   - Keep element selectors private
   - Use meaningful method names that represent business actions

3. **Base Page Implementation**

```typescript
class BasePage {
  private readonly elements = {
    signupLoginLink: 'Signup / Login',
    logoutLink: 'Logout',
  };

  visitLoginPage() {
    cy.visit('/').contains('a', this.elements.signupLoginLink).click();
    return new LoginPage();
  }

  validateHomePageTitle() {
    cy.title().should('eq', 'Automation Exercise');
  }
}
```

4. **Page Object Pattern**

```typescript
class LoginPage {
  private readonly elements = {
    emailInput: 'login-email',
    passwordInput: 'login-password',
  };

  login(email: string, password: string) {
    cy.getDataQa(this.elements.emailInput).type(email);
    cy.getDataQa(this.elements.passwordInput).type(password);
    return new BasePage();
  }
}
```

## 🔌 Best Practices for API Tests (In Progress)

1. **Custom Commands for API Operations**

```typescript
Cypress.Commands.add('createUserViaApi', (userData: UserData) => {
  const apiUserData = DataTransformer.transformToCreateUserDataApi(userData);
  cy.request({
    method: 'POST',
    url: Cypress.env('apiEndpoints').createUser,
    form: true,
    body: apiUserData,
  });
});
```

2. **Type Definitions**

```typescript
interface UserData {
  name: string;
  email: string;
  password: string;
  // ... other properties
}

declare global {
  namespace Cypress {
    interface Chainable {
      createUserViaApi(userData: UserData): Chainable<void>;
    }
  }
}
```

## 🔄 Project Structure

```
cypress/
├── e2e/                 # Test files
├── pages/              # Page Objects
├── support/
│   ├── commands.ts    # Custom commands
│   └── utils/
│       ├── DataFactory.ts     # Test data generation
│       └── DataTransformer.ts # Data transformation
└── types/              # TypeScript interfaces
```

## 🔄 CI/CD with GitHub Actions (Coming Soon)

Planned features:

- Automated test execution on pull requests
- Test report generation and publishing
- Video artifacts for failed tests
- Parallel test execution
- Cross-browser testing

## 📊 Reporting

The framework uses Mochawesome for comprehensive test reporting:

```bash
# Reports are automatically generated after test runs
npm run test
# Find the HTML report in cypress/reports/html/index.html
```

---

## 📫 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📝 License

This project is licensed under the ISC License.
