describe('Header', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should display the logo and brand name', () => {
        cy.get('.navbar-brand').contains('Emotional Intel');
    });

    it('should display navigation links', () => {
        cy.get('.nav-link').contains('About').should('exist');
        cy.get('.nav-link').contains('Log in').should('exist');
        cy.get('.nav-link').contains('Registration').should('exist');
        cy.get('.nav-link').contains('Profile').should('exist');
    });

});
