describe('Performance Checks', () => {
    it('loads the home page quickly', () => {
        const start = new Date().getTime();
        cy.visit('https://the-internet.herokuapp.com/');
        const end = new Date().getTime();
        expect(end - start).to.be.lessThan(2000); // Page should load in under 2 seconds
    });
});