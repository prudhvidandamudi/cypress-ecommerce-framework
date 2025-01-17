import LoginPage from './LoginPage';

class BasePage {
  private readonly signupLogin: string;
  private readonly logoutButton: string;

  constructor() {
    this.signupLogin = 'Signup / Login';
    this.logoutButton = 'Logout';
  }

  visitLoginPage() {
    cy.visit('/').contains('a', this.signupLogin).click();
    return new LoginPage();
  }

  logout() {
    cy.contains('a', this.logoutButton).click();
    return new LoginPage();
  }
}

export default BasePage;
