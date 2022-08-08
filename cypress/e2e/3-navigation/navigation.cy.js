/// <reference types="cypress" />

describe('Navigation', () => {
  it('should navigate to the accident create page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "form" and click it
    cy.get('a[href*="form"]').click()

    // The new url should include "/form"
    cy.url().should('include', '/form')

    // The new page should contain an h1 with "Vehicle Damage page"
    cy.get('h1').contains('Vehicle Damage Report')
  })

  it('should navigate to the status page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "status" and click it
    cy.get('a[href*="status"]').click()

    // The new url should include "/status"
    cy.url().should('include', '/status')

    // The new page should contain an form with "Status page"
    cy.get('form').submit()

  })

  it('should navigate to the overview page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "overview" and click it
    cy.get('a[href*="overview"]').click()

    // The new url should include "/overview"
    cy.url().should('include', '/overview')

    // The new page should contain an form with "overview page"
    cy.get('table').find("tr").then((row) => {
      //row.length will give you the row count
      cy.log(row.length);
    });

  })
})
