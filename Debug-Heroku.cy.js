describe('Debugging - Heroku The Internet', () => {
    it('Intentionally fails by using the wrong selector', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('button[type="submit"]').click(); // Incorrect selector to cause failure
        cy.contains('You logged into a secure area!').should('be.visible');
    });
});
