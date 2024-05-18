describe('Footer Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Змініть URL на відповідний вашому проекту
  });

  it('should render the footer with correct text and styles', () => {
    // Перевіряємо, чи елемент футера існує на сторінці
    cy.get('footer').should('exist');

    // Перевіряємо, чи футер має клас position-absolute
    cy.get('footer').should('have.class', 'position-absolute');

    // Перевіряємо, чи футер має клас bottom-0
    cy.get('footer').should('have.class', 'bottom-0');

    // Перевіряємо, чи футер має клас min-vw-100
    cy.get('footer').should('have.class', 'min-vw-100');

    // Перевіряємо, чи футер має клас bg-info-subtle
    cy.get('footer').should('have.class', 'bg-info-subtle');

    // Перевіряємо, чи футер має клас bg-gradient
    cy.get('footer').should('have.class', 'bg-gradient');

    // Перевіряємо, чи футер має клас text-success
    cy.get('footer').should('have.class', 'text-success');

    // Перевіряємо, чи футер має клас p-4
    cy.get('footer').should('have.class', 'p-4');

    // Перевіряємо, чи футер містить текст © 2024 Emotional Intel
    cy.get('footer').contains('© 2024 Emotional Intel').should('exist');
  });
});
