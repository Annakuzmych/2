describe('MainQuiz', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('should display the quiz header and footer', () => {
        cy.get('header').should('exist');
        cy.get('footer').should('exist');
    });

    it('should display the first question', () => {
        cy.get('.card-header').should('contain', 'How often do you experience stress or negative emotions?');
    });

});
