describe('UserProfilePage Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/profile', {
      statusCode: 200,
      body: {
        name: 'May Doe',
        email: '1.2@3.com',
        gender: 'Male',
        dob: '1990-01-01'
      }
    }).as('getProfile');

    cy.intercept('PUT', '/api/profile', {
      statusCode: 200,
      body: {
        name: 'Ann',
        email: '1.1@1.com',
        gender: 'Female',
        dob: '1995-05-05'
      }
    }).as('updateProfile');

    cy.visit('http://localhost:3000/profile');
  });

  it('should load and display the user profile correctly', () => {
    cy.wait('@getProfile');

    cy.get('#userName').should('have.text', 'John Doe');
    cy.get('#userEmail').should('have.text', 'john.doe@example.com');
    cy.get('#userGender').should('have.text', 'Male');
    cy.get('#userDob').should('have.text', '1990-01-01');
  });

  it('should open the edit profile form when the Edit Profile button is clicked', () => {
    cy.get('#editProfileButton').click();
    cy.get('#editProfileForm').should('be.visible');

    cy.get('#editProfileForm #name').should('have.value', 'John Doe');
    cy.get('#editProfileForm #email').should('have.value', 'john.doe@example.com');
    cy.get('#editProfileForm #gender').should('have.value', 'Male');
    cy.get('#editProfileForm #dob').should('have.value', '1990-01-01');
  });
});
