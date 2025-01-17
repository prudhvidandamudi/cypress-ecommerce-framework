import BasePage from '../pages/BasePage';
import DataFactory from '../support/utils/DataFactory';

describe('Form Registration Test', () => {
  let basePage: BasePage;

  beforeEach(() => {
    basePage = new BasePage();
  });

  it('User should be able to register and delete the account', () => {
    const userData = DataFactory.generateUserData();
    // Registering a new user
    basePage
      .visitLoginPage()
      .newUserSignup(userData)
      .fillRegisterForm(userData);

    // Deleting the account
    basePage.logout().validateLoginPageMessage();
  });
});
