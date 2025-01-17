// cypress/support/commands.ts

declare global {
  namespace Cypress {
    interface Chainable {
      getDataQa(selector: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add('getDataQa', (selector: string) => {
  return cy.get(`[data-qa="${selector}"]`);
});

export {};
