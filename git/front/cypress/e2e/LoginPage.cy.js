describe('LoginPage Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });

    it('should display the header', () => {
        cy.get('header').should('exist');
    });

    it('should display the footer', () => {
        cy.get('footer').should('exist');
    });

    it('should display the login form', () => {
        cy.get('form').should('exist');
    });

    it('should have an email input', () => {
        cy.get('input[type="email"]').should('exist');
    });

    it('should have a password input', () => {
        cy.get('input[type="password"]').should('exist');
    });

    it('should have a login button', () => {
        cy.get('button[type="submit"]').should('exist');
        cy.get('button[type="submit"]').should('contain.text', 'Login');
    });

    it('should allow user to type in the email input', () => {
        cy.get('input[type="email"]').type('test@example.com').should('have.value', 'test@example.com');
    });

    it('should allow user to type in the password input', () => {
        cy.get('input[type="password"]').type('password123').should('have.value', 'password123');
    });

    it('should submit the form', () => {
        cy.get('input[type="email"]').type('test@example.com');
        cy.get('input[type="password"]').type('password123');
        cy.get('form').submit();
    });
});
