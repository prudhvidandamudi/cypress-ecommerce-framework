import DataFactory from '../support/utils/DataFactory';
import BasePage from '../pages/BasePage';
import { UserData } from '../types';

describe('User Login Logout Test', () => {
  let basePage: BasePage;
  let userData: UserData;

  beforeEach(() => {
    basePage = new BasePage();
    userData = DataFactory.generateUserData();

    cy.createUserViaApi(userData);
  });

  afterEach(() => {
    cy.deleteUserViaApi({ email: userData.email, password: userData.password });
  });

  it('User should be able to login successfully!', () => {
    basePage
      .visitLoginPage()
      .login(userData.email, userData.password)
      .validateHomePageTitle();
  });

  it('User should be able to logout successfully!', () => {
    basePage.visitLoginPage().login(userData.email, userData.password);

    basePage.visitLogout().validateLoginPageMessage();
  });
});
