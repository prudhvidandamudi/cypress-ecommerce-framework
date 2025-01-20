import BasePage from '../pages/BasePage';
import DataFactory from '../support/utils/DataFactory';

describe('Contact Us Tests', () => {
  let basePage: BasePage;

  before(() => {
    basePage = new BasePage();
  });

  it('should be able to submit a contact form', () => {
    const contactData = DataFactory.generateContactFormData();

    basePage.visitContactUs().fillContactUsForm(contactData);
  });

  after(() => {
    cy.exec('find cypress/fixtures/uploads -type f -delete', {
      failOnNonZeroExit: false,
    });
  });
});
