describe('Registratie reg5', () => {
    it('registreert met willekeurige naam en wachtwoord', () => {
      cy.visit('https://demowebshop.tricentis.com/login')

      // Voer inlogactie uit met de eerder geregistreerde gegevens
    cy.get('#Email').type(randomEmail)
    cy.get('#Password').type(randomPassword)
    cy.get('[value="Log in"]').click()
  
  })
})

