// cypress/support/commands.ts

import { LoginData, UserData } from '../types';
import { DataTransformer } from './utils/DataTransformer';

declare global {
  namespace Cypress {
    interface Chainable {
      getDataQa(selector: string): Chainable<JQuery<HTMLElement>>;
      createUserViaApi(userData: UserData): Chainable<void>;
      deleteUserViaApi(loginData: LoginData): Chainable<void>;
    }
  }
}

Cypress.Commands.add('getDataQa', (selector: string) => {
  return cy.get(`[data-qa="${selector}"]`);
});

Cypress.Commands.add('createUserViaApi', (userData: UserData) => {
  const apiUserData = DataTransformer.transformToCreateUserDataApi(userData);

  cy.request({
    method: 'POST',
    url: Cypress.env('apiEndpoints').createUser,
    form: true,
    body: apiUserData,
  }).then((response) => {
    const responseBody = JSON.parse(response.body);

    expect(responseBody.responseCode).to.eq(201);
    expect(responseBody.message).to.eq('User created!');
  });
});

Cypress.Commands.add('deleteUserViaApi', (userData: LoginData) => {
  cy.request({
    method: 'DELETE',
    url: Cypress.env('apiEndpoints').deleteUser,
    form: true,
    body: userData,
  }).then((response) => {
    const responseBody = JSON.parse(response.body);

    expect(responseBody.responseCode).to.eq(200);
    expect(responseBody.message).to.eq('Account deleted!');
  });
});

export {};
