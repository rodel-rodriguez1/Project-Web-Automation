import 'cypress-axe';

describe('Accessibility Tests', () => {
    it('Has no detectable accessibility violations on load', () => {
        cy.visit('https://the-internet.herokuapp.com');
        cy.injectAxe();
        cy.checkA11y();
    });
}); 
