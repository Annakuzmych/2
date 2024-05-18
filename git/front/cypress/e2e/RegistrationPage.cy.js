describe('RegistrationPage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/registration'); // Змініть URL на відповідний вашому проекту
    });

    it('should display the registration form', () => {
        cy.get('form').should('exist');
        cy.get('input#name').should('exist');
        cy.get('input#email').should('exist');
        cy.get('select#gender').should('exist');
        cy.get('input#dob').should('exist');
        cy.get('button[type="submit"]').should('exist');
    });

    it('should allow typing into the form fields', () => {
        cy.get('input#name').type('John Doe').should('have.value', 'John Doe');
        cy.get('input#email').type('john.doe@example.com').should('have.value', 'john.doe@example.com');
        cy.get('select#gender').select('male').should('have.value', 'male');
        cy.get('input#dob').type('2000-01-01').should('have.value', '2000-01-01');
    });

    it('should submit the form', () => {
        cy.get('input#name').type('John Doe');
        cy.get('input#email').type('john.doe@example.com');
        cy.get('select#gender').select('male');
        cy.get('input#dob').type('2000-01-01');
        cy.get('button[type="submit"]').click();
    });
});
