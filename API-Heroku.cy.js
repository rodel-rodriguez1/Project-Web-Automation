describe('API Tests', () => {
    it('Checks status API returns 200', () => {
        cy.request('https://the-internet.herokuapp.com/status_codes/200')
          .its('status')
          .should('equal', 200);
    });
});