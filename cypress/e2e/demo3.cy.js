describe('Registratie Test', () => {
    const namesAndEmails = [
        { firstName: 'Emma', lastName: 'Koster' },
        { firstName: 'Lars', lastName: 'Van den Berg' },
        { firstName: 'Noa', lastName: 'Meijer' },
        { firstName: 'Sem', lastName: 'Smit' },
        { firstName: 'Julia', lastName: 'Mulder' },
        { firstName: 'Finn', lastName: 'Van der Heijden' },
        { firstName: 'Tess', lastName: 'Van Leeuwen' },
        { firstName: 'Max', lastName: 'De Jong' },
        { firstName: 'Sara', lastName: 'Vos' },
        { firstName: 'Jesse', lastName: 'Bakker' }
        // Voeg meer namen toe indien nodig
    ];

    it('registreert met willekeurige naam en wachtwoord', () => {
        cy.visit('https://demowebshop.tricentis.com/register');

        const randomPassword = 'Passw0rd!123'; // Willekeurig wachtwoord, pas dit indien nodig aan

        function generateRandomEmail(firstName, lastName) {
            const domain = 'example.com'; // of een ander gewenst domein
            const randomNumber = Math.floor(Math.random() * 10000); // genereer een willekeurig getal
            const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${randomNumber}@${domain}`;
            return email;
        }

        namesAndEmails.forEach(({ firstName, lastName }) => {
            it(`Registreert met ${firstName} ${lastName}`, () => {
                const randomEmail = generateRandomEmail(firstName, lastName);
                cy.log(`Naam: ${firstName} ${lastName}, E-mail: ${randomEmail}`);

                // Voer hier je teststappen uit en gebruik randomEmail waar nodig
                
                // ... andere stappen voor registratie
            });
        });
                cy.get('#FirstName').type(firstName);
                cy.get('#LastName').type(lastName);
                cy.get('#Email').type(randomEmail);
                cy.get('#Password').type(randomPassword);
                cy.get('#ConfirmPassword').type(randomPassword);
        // Deze stappen buiten de forEach-lus zullen na alle tests worden uitgevoerd, niet binnen elke test
        // Voer hier alleen stappen uit die na alle tests moeten worden uitgevoerd.
    });
});
