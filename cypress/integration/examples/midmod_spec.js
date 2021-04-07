describe('Page load tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should display a title', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  });

  it('Should display a list of reservations', () => {
    cy
      .get('.res-card')
      .should(($resCard) => {
        expect($resCard).to.have.length(9)
        expect($resCard, 'first').to.contain('Christie')
        expect($resCard, 'first').to.contain('12/29')
        expect($resCard, 'second').to.contain('Leta')
        expect($resCard, 'second').to.contain('7:00pm')
        expect($resCard, 'third').to.contain('Pam')
        expect($resCard, 'third').to.contain('Number of guests: 4')
      })
  });

  it('Should display a form to add a reservation', () => {
    // cy.
    //   get
  })

})


/*
Write tests covering what should be displayed on the page when the user first visits.
Write a test that checks that when data is put into the form, the value is reflected in that form input.
Write a test to check the user flow of adding a new reservation to the page.
*/
