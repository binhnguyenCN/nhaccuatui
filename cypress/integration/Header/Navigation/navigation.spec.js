// libs
import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I access homepage', () => {
  cy.visit('http://localhost:3000/');
  cy.get('span[href*="/about"]').click();
});
When('I click to about link in header', () => {
  cy.url().should('include', '/about');
});
Then('I was redirected from Home page to About page', () => {
  cy.get('h1').contains('Internship program in Citynow');
});
