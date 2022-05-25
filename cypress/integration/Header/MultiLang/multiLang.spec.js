/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
// libs
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I access Home page', () => {
  cy.visit('/');
});
Then(`I should see title {string} by default`, (title) => {
  cy.findByText(title).should('exist');
});
When('I select EN to change language to English in header', () => {
  cy.get('#langs').should('exist');
  cy.get('#langs').select('en');
});
Then(`I should see title {string}`, (title) => {
  cy.findByText(title).should('exist');
});
