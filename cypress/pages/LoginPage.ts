import { UserData } from '../types';
import RegisterFormPage from './RegisterFormPage';

class LoginPage {
  // Locators
  private readonly loginEmailAddress: string;
  private readonly password: string;
  private readonly loginButton: string;
  private readonly name: string;
  private readonly signupEmailAddress: string;
  private readonly signupButton: string;
  private readonly loginPageMessage: string;

  constructor() {
    this.loginEmailAddress = 'login-email';
    this.password = 'login-password';
    this.loginButton = 'login-button';
    this.name = 'signup-name';
    this.signupEmailAddress = 'signup-email';
    this.signupButton = 'signup-button';
    this.loginPageMessage = 'Login to your account';
  }

  visit() {
    cy.visit('/login');
    return this;
  }

  private fillLoginEmail(value: string) {
    cy.getDataQa(this.loginEmailAddress).type(value);
    return this;
  }

  private fillPassword(value: string) {
    cy.getDataQa(this.password).type(value);
    return this;
  }

  private clickLoginButton() {
    cy.getDataQa(this.loginButton).click();
    return this;
  }

  private fillName(value: string) {
    cy.getDataQa(this.name).type(value);
    return this;
  }

  private fillSignupEmail(value: string) {
    cy.getDataQa(this.signupEmailAddress).type(value);
    return this;
  }

  private clickSignupButton() {
    cy.getDataQa(this.signupButton).click();
    return this;
  }

  public login(email: string, password: string) {
    this.fillLoginEmail(email).fillPassword(password).clickLoginButton();
  }

  public validateLoginPageMessage() {
    cy.get('h2').contains(this.loginPageMessage);
  }

  public newUserSignup(userData: UserData) {
    this.fillName(userData.name)
      .fillSignupEmail(userData.email)
      .clickSignupButton();

    return new RegisterFormPage();
  }
}

export default LoginPage;
