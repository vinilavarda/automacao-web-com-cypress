const faker = require('faker')

class CreateAccount {
  accessCreatePage = '.panel.header > .header.links'
  firstName = '#firstname'
  lastName = '#lastname'
  email = '#email_address'
  password = '#password'
  passConfirm = '#password-confirmation'
  confirmCadButton = '[title="Create an Account"]'
  url = 'https://magento.softwaretestingboard.com/'

  access() {
    cy.visit(this.url)
  }

  accessSignUp() {
    cy.get(this.accessCreatePage).should('be.visible').last().click()
  }

  create(password) {
    cy.get(this.firstName).type(faker.name.firstName())
    cy.get(this.lastName).type(faker.name.lastName())
    cy.get(this.email).type(faker.internet.email())
    cy.get(this.password).type(password)
    cy.get(this.passConfirm).type(password)
    cy.get(this.confirmCadButton).should('be.visible').click()
  }
}

export default CreateAccount
