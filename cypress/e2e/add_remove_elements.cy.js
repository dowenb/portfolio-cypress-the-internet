/// <reference types="Cypress" />

describe('Add/Remove Elements', () => {
  it('Elements should be empty', () => {
    cy.visit('/add_remove_elements/')

    cy.get('#elements').children().should('have.length', 0)
  })

  it('Elements can be added', () => {
    cy.visit('/add_remove_elements/')

    cy.get('#content > div > button').click()

    cy.get('#elements').children().should('have.length', 1)
  })

  it('All added elements can be removed', () => {
    cy.visit('/add_remove_elements/')

    // TODO(later): Better way to add n elements
    cy.get('#content > div > button').click()
    cy.get('#content > div > button').click()
    cy.get('#content > div > button').click()

    // TODO(later): Make this easier to read, so it's obvious it clicks each delete button
    cy.get('#elements > button').each(($el) => {
      cy.wrap($el).click()
    })

    cy.get('#elements').children().should('have.length', 0)
  })


})