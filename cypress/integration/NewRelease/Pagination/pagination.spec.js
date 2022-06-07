/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
// libs
import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';
// constants
const keyCode = {
  KEY_PAGE_UP: 33,
  KEY_PAGE_DOWN: 34,
};

// Move between pages by click
Given('I access homepage', () => {
  cy.visit('/');
});
When('I click to next button', () => {
  cy.findAllByTestId('next').should('exist');
  cy.findAllByTestId('next').click();
});
// Move between pages by press key
When('I scroll to New Release', () => {
  cy.get('#new-release').scrollIntoView({
    duration: 2000,
    easing: 'linear',
    offset: { top: 150, left: 0 },
  });
});
And('I hover in New Release', () => {
  cy.get('#new-release').trigger('mouseover');
});
When('I press PageDown key', () => {
  cy.get('#new-release').trigger('keydown', {
    keycode: keyCode.KEY_PAGE_DOWN,
  });
});
When('I press PageUp key', () => {
  cy.get('#new-release').trigger('keydown', {
    code: keyCode.KEY_PAGE_UP,
  });
});

Then('I was moved to next page', () => {
  cy.findAllByTestId('page').should('exist');
  cy.findAllByTestId('page').contains('2 / 3');
});
Then('I was returned to prev page', () => {
  cy.findAllByTestId('page').should('exist');
  cy.findAllByTestId('page').contains('1 / 3');
});
