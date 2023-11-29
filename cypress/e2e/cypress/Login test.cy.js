import { getBaseUrl } from '../support/config';

describe('Login tests', () => {
  const baseUrl = getBaseUrl();

  beforeEach(() => {
    // Mogelijkheid om testdata te laden
    // cy.fixture('TestData_demo').as('testData');
  });

  it('Should perform login using valid credentials', () => {
    cy.visit(baseUrl);
    // Gebruik testdata voor inloggen
    // cy.get('input[name="username"]').type(this.testData.validCredentials.username);
    // cy.get('input[name="password"]').type(this.testData.validCredentials.password);
    // Voer de loginstappen uit
  });

  it('Should handle login failure with invalid credentials', () => {
    cy.visit(baseUrl);
    // Gebruik testdata voor ongeldige inlogpoging
    // cy.get('input[name="username"]').type(this.testData.invalidCredentials.username);
    // cy.get('input[name="password"]').type(this.testData.invalidCredentials.password);
    // Voer de inlogstappen uit en controleer de foutmeldingen
  });

  // Andere tests die gebruikmaken van de basis-URL en testdata
});
