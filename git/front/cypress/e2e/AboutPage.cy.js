describe('AboutPage Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/about');
    });

    it('should display the header', () => {
        cy.get('header').should('exist');
    });

    it('should display the footer', () => {
        cy.get('footer').should('exist');
    });

    it('should display the main content', () => {
        cy.get('main').should('exist');
    });

    it('should display the about section with correct text', () => {
        cy.get('#about').should('exist');
        cy.get('#about .container .row .col-md-6')
            .should('contain.text', 'The website focuses on emotional intelligence, exploring its impact on daily life and well-being. It offers insights into managing emotions, understanding oneself and others, and improving problem-solving skills. Through articles, quizzes, and interactive tools, the site aims to enhance emotional intelligence and promote mental wellness.');
    });

    it('should display the card with image, title, text, and link', () => {
        cy.get('.card').should('exist');
        cy.get('.card img').should('have.attr', 'src', 'https://th.bing.com/th/id/OIP.2lkb2YwA9Bu-jyHnPpQefQHaFj?rs=1&pid=ImgDetMain');
        cy.get('.card .card-title').should('have.text', 'Some info');
        cy.get('.card .card-text').should('have.text', 'Be intelligence');
        cy.get('.card .btn').should('have.text', 'For more information');
    });
});
