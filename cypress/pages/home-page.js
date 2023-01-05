class HomePage {
  homeButton = '.nav.item'
  validateHomePage = '[data-ui-id="page-title-wrapper"]'

  goToHomePage() {
    cy.get(this.homeButton).first().click()
  }

  validateHome(validateText) {
    cy.get(this.validateHomePage).should('have.text', validateText)
  }
}

export default HomePage
