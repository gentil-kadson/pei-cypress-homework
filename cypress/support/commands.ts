/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
export {};
declare global {
  namespace Cypress {
    interface Chainable {
      loginCoordinator(): Chainable<void>;
    }
  }
}

Cypress.on("uncaught:exception", () => false);

Cypress.Commands.add("loginCoordinator", () => {
  cy.visit("/accounts/login/");
  cy.get("input[id='id_login']").type(Cypress.env("COORDINATOR_EMAIL"));
  cy.get("input[id='id_password']").type(Cypress.env("PASSWORD"), {
    log: false,
  });
  cy.get("button").contains("Entrar").click();
});
