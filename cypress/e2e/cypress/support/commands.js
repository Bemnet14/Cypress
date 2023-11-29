// ***********************************************
// This example commands.js shows you how to
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

// commands.js

Cypress.Commands.add('generateRandomName', () => {
    const firstNames = [
      'John', 'Alice', 'Robert', 'Emily', 'Michael', 'Sophia', 'William', 'Olivia', 'David', 'Emma',
      // Voeg meer Engelse voornamen toe aan deze lijst
      // ...
    ];
  
    const lastNames = [
      'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
      // Voeg meer Engelse achternamen toe aan deze lijst
      // ...
    ];
  
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
    const generateEmail = (firstName, lastName) => {
      const domain = 'example.com'; // Vervang dit met je gewenste domein
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
      return email;
    };
  
    const email = generateEmail(randomFirstName, randomLastName);
  
    return {
      firstName: randomFirstName,
      lastName: randomLastName,
      email: email,
    };
  });

  // commands.js

Cypress.Commands.add('generateRandomName', () => {
    // ...
  
    const generateEmail = (firstName, lastName) => {
      const domain = 'example.com'; // Vervang dit met je gewenste domein
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
      return email;
    };
  
    const email = generateEmail(randomFirstName, randomLastName);
  
    return {
      firstName: randomFirstName,
      lastName: randomLastName,
      email: email,
    };
  });
  
  