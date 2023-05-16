/// <reference types="Cypress" />

describe('Add/Remove Elements', () => {
  it('Elements should be empty', () => {
    cy.visit('/add_remove_elements/')

    cy.get('#elements').children().should('have.length', 0)
  })

  it('Elements can be added and removed', () => {
    cy.visit('/add_remove_elements/')

    cy.get('#content > div > button').click()

    cy.get('#elements').children().should('have.length', 1)

    cy.get('#elements > button').click()

    cy.get('#elements').children().should('have.length', 0)
  })


})