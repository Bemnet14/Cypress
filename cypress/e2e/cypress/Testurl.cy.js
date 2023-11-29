import { getBaseUrl } from '../../../cypress/e2e/cypress/support/config';

describe('Tests', () => {
  it('Should navigate to the appropriate URL based on the environment', () => {
    const environments = ['development']; // Lijst van beschikbare omgevingen

    // Voer de tests uit voor elke omgeving
    environments.forEach((env) => {
      const baseUrl = getBaseUrl(env);
      cy.visit(baseUrl);
      // Voer teststappen uit op de specifieke URL voor de geselecteerde omgeving
    });
  });
});
