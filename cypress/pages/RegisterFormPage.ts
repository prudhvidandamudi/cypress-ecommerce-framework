import { UserData } from '../types';

class RegisterFormPage {
  private readonly mrRadioButton: string;
  private readonly mrsRadioButton: string;
  private readonly name: string;
  private readonly email: string;
  private readonly password: string;
  private readonly dayDropdown: string;
  private readonly monthDropdown: string;
  private readonly yearDropdown: string;
  private readonly newsletterCheckbox: string;
  private readonly specialOffersCheckbox: string;
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly company: string;
  private readonly address: string;
  private readonly address2: string;
  private readonly countryDropdown: string;
  private readonly state: string;
  private readonly city: string;
  private readonly zipcode: string;
  private readonly mobileNumber: string;
  private readonly createAccountButton: string;
  private readonly accountCreatedMessage: string;
  private readonly continueButton: string;

  constructor() {
    this.mrRadioButton = '#id_gender1';
    this.mrsRadioButton = '#id_gender2';
    this.name = 'name';
    this.email = 'email';
    this.password = 'password';
    this.dayDropdown = 'days';
    this.monthDropdown = 'months';
    this.yearDropdown = 'years';
    this.newsletterCheckbox = '#newsletter';
    this.specialOffersCheckbox = '#optin';
    this.firstName = 'first_name';
    this.lastName = 'last_name';
    this.company = 'company';
    this.address = 'address';
    this.address2 = 'address2';
    this.countryDropdown = 'country';
    this.state = 'state';
    this.city = 'city';
    this.zipcode = 'zipcode';
    this.mobileNumber = 'mobile_number';
    this.createAccountButton = 'create-account';
    this.accountCreatedMessage = 'Account Created!';
    this.continueButton = 'continue-button';
  }

  private selectMr() {
    cy.get(this.mrRadioButton).click();
    return this;
  }

  private selectMrs() {
    cy.get(this.mrsRadioButton).click();
    return this;
  }

  private validateNamePopped(value: string) {
    cy.getDataQa(this.name).should('have.value', value);
    return this;
  }

  private validateEmailPopped(value: string) {
    cy.getDataQa(this.email).should('have.value', value);
    return this;
  }

  private fillPassword(value: string) {
    cy.getDataQa(this.password).type(value);
    return this;
  }

  private selectDay(value: string) {
    cy.getDataQa(this.dayDropdown).select(value);
    return this;
  }

  private selectMonth(value: string) {
    cy.getDataQa(this.monthDropdown).select(value);
    return this;
  }

  private selectYear(value: string) {
    cy.getDataQa(this.yearDropdown).select(value);
    return this;
  }

  private checkNewsletter() {
    cy.get(this.newsletterCheckbox).check();
    return this;
  }

  private checkSpecialOffers() {
    cy.get(this.specialOffersCheckbox).check();
    return this;
  }

  private fillFirstName(value: string) {
    cy.getDataQa(this.firstName).type(value);
    return this;
  }

  private fillLastName(value: string) {
    cy.getDataQa(this.lastName).type(value);
    return this;
  }

  private fillCompany(value: string) {
    cy.getDataQa(this.company).type(value);
    return this;
  }

  private fillAddress(value: string) {
    cy.getDataQa(this.address).type(value);
    return this;
  }

  private fillAddress2(value: string) {
    cy.getDataQa(this.address2).type(value);
    return this;
  }

  private selectCountry(value: string) {
    cy.getDataQa(this.countryDropdown).select(value);
    return this;
  }

  private selectState(value: string) {
    cy.getDataQa(this.state).type(value);
    return this;
  }

  private fillCity(value: string) {
    cy.getDataQa(this.city).type(value);
    return this;
  }

  private fillZipcode(value: string) {
    cy.getDataQa(this.zipcode).type(value);
    return this;
  }

  private fillMobileNumber(value: string) {
    cy.getDataQa(this.mobileNumber).type(value);
    return this;
  }

  private clickCreateAccountButton() {
    cy.getDataQa(this.createAccountButton).click();
    return this;
  }

  private clickContinueButton() {
    cy.getDataQa(this.continueButton).click();
    return this;
  }

  public validateAccountCreated() {
    cy.contains(this.accountCreatedMessage);
    return this;
  }

  public fillRegisterForm(userData: UserData) {
    this.selectMr()
      .validateNamePopped(userData.name)
      .validateEmailPopped(userData.email)
      .fillPassword(userData.password)
      .selectDay(userData.dateOfBirth.day.toString())
      .selectMonth(userData.dateOfBirth.month)
      .selectYear(userData.dateOfBirth.year.toString());

    if (userData.newsletter) {
      this.checkNewsletter();
    }

    if (userData.specialOffers) {
      this.checkSpecialOffers();
    }

    this.fillFirstName(userData.address.firstName)
      .fillLastName(userData.address.lastName)
      .fillCompany(userData.address.company)
      .fillAddress(userData.address.address1)
      .fillAddress2(userData.address.address2)
      .selectCountry(userData.address.country)
      .selectState(userData.address.state)
      .fillCity(userData.address.city)
      .fillZipcode(userData.address.zipcode)
      .fillMobileNumber(userData.address.mobileNumber)
      .clickCreateAccountButton()
      .validateAccountCreated()
      .clickContinueButton();

    return this;
  }
}

export default RegisterFormPage;
