import DataFactory from '../support/utils/DataFactory';
import { ContactData } from '../types/contact.types';

class ContactUsPage {
  private readonly name: string;
  private readonly email: string;
  private readonly subject: string;
  private readonly message: string;
  private readonly inputFile: string;
  private readonly submitButton: string;
  private readonly successMessage: string;

  constructor() {
    this.name = 'name';
    this.email = 'email';
    this.subject = 'subject';
    this.message = 'message';
    this.inputFile = 'input[type="file"]';
    this.submitButton = 'submit-button';
    this.successMessage =
      'Success! Your details have been submitted successfully.';
  }

  private fillName(value: string) {
    cy.getDataQa(this.name).type(value);
    return this;
  }

  private fillEmail(value: string) {
    cy.getDataQa(this.email).type(value);
    return this;
  }

  private fillSubject(value: string) {
    cy.getDataQa(this.subject).type(value);
    return this;
  }

  private fillMessage(value: string) {
    cy.getDataQa(this.message).type(value);
    return this;
  }

  private uploadFile() {
    const file = DataFactory.generateFileData();
    const filePath = `cypress/fixtures/uploads/${file.fileName}`;

    cy.writeFile(filePath, file.fileContent);
    cy.get(this.inputFile).selectFile(filePath);
    return this;
  }

  private clickSubmitButton() {
    cy.getDataQa(this.submitButton).click();
    return this;
  }

  validateSuccessMessage() {
    cy.contains(this.successMessage).should('be.visible');
    return this;
  }

  fillContactUsForm(data: ContactData) {
    this.fillName(data.name);
    this.fillEmail(data.email);
    this.fillSubject(data.message);
    this.fillMessage(data.subject);
    this.uploadFile();
    this.clickSubmitButton();
    return this;
  }
}

export default ContactUsPage;
