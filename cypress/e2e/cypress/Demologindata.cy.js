import { getBaseUrl } from '../support/config';
//import { getBaseUrl } from '../cypress/e2e/cypress/support/getBaseUrl.json';
import { generateRandomRegistrationData } from '../cypress/e2e/cypress/support/randomRegistrationData.js';

describe('Registration tests', () => {
  const environment = Cypress.env('env') || 'development';
  const baseUrl = getBaseUrl(environment);

  beforeEach(() => {
    const randomRegistrationData = generateRandomRegistrationData();
    cy.wrap(randomRegistrationData).as('registrationData');
  });

  it('Should register a new user with random data', function () {
    cy.visit(`${baseUrl}/register`);

    // Gebruik de juiste locators om interacties uit te voeren
    cy.get('#FirstName').type(this.registrationData.firstName);
    cy.get('#LastName').type(this.registrationData.lastName);
    cy.get('#Email').type(this.registrationData.email);
    cy.get('#Password').type(this.registrationData.password);

    cy.get('input[value="Register"]').click();

    // Voeg verificatiestappen toe na de registratie als nodig
  });

