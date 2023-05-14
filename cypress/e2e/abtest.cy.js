describe('A/B Test', () => {
  it('passes', () => {
    cy.visit('/abtest')

    cy.get('#content > div > h3').should('include.text', 'A/B Test')
  })
})