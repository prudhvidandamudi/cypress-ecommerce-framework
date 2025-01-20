import ContactUsPage from './ContactUsPage';
import LoginPage from './LoginPage';

class BasePage {
  private readonly signupLoginLink: string;
  private readonly logoutLink: string;
  private readonly deleteAccountLink: string;
  private readonly contactUsLink: string;
  private readonly accountDeletedMessage: string;
  private readonly homePageTitle: string;

  constructor() {
    this.signupLoginLink = 'Signup / Login';
    this.logoutLink = 'Logout';
    this.deleteAccountLink = 'Delete Account';
    this.contactUsLink = 'Contact us';
    this.accountDeletedMessage = 'Account Deleted!';
    this.homePageTitle = 'Automation Exercise';
  }

  visitLoginPage() {
    cy.visit('/').contains('a', this.signupLoginLink).click();
    return new LoginPage();
  }

  visitLogout() {
    cy.visit('/').contains('a', this.logoutLink).click();
    return new LoginPage();
  }

  visitContactUs() {
    cy.visit('/').contains('a', this.contactUsLink).click();
    return new ContactUsPage();
  }

  validateAccountDeleted() {
    cy.contains(this.accountDeletedMessage);
  }

  validateHomePageTitle() {
    cy.title().should('eq', this.homePageTitle);
  }

  deleteUserAccount() {
    cy.contains('a', this.deleteAccountLink).click();
    return this;
  }
}

export default BasePage;
