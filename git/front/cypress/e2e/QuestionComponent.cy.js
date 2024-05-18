describe('QuestionComponent', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/questions', { fixture: 'questions.json' });
        cy.visit('http://localhost:3000');
    });

    it('should load and display the first question', () => {
        cy.get('.card-header').should('contain.text', 'What is your favorite color?');
    });

    it('should navigate to the next question', () => {
        cy.get('.btn').contains('Next').click();
        cy.get('.card-header').should('contain.text', 'What is your favorite animal?');
    });

    it('should navigate to the previous question', () => {
        cy.get('.btn').contains('Next').click();
        cy.get('.btn').contains('Previous').click();
        cy.get('.card-header').should('contain.text', 'What is your favorite color?');
    });

    it('should finish the quiz', () => {
        cy.get('.btn').contains('Next').click();
        cy.get('.btn').contains('Finish').click();
    });
});
