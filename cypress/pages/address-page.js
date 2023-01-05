const faker = require('faker')

class AddressPage {
  accessAddressButton = '[data-ui-id=default-billing-edit-link]'
  phone = '#telephone'
  street = '#street_1'
  city = '#city'
  state = '#region_id'
  zipcode = '#zip'
  btnSaveAddress = '[data-action="save-address"]'
  country = '#country'
  savedSuccessfully =
    '[data-bind="html: $parent.prepareMessageForHtml(message.text)"]'

  accessAddress() {
    cy.get(this.accessAddressButton).should('be.visible').click()
  }

  fillFields(
    chooseState,
    numState,
    formatZipCode,
    chooseCountry,
    numCountry,
    success
  ) {
    cy.get(this.phone).type(
      faker.datatype.number({ min: 10000000, max: 99999999 })
    )
    cy.get(this.street).type(faker.address.streetAddress(true))
    cy.get(this.city).type(faker.address.city())
    cy.get(this.state).select(chooseState).should('have.value', numState)
    cy.get(this.zipcode).type(faker.address.zipCode(formatZipCode))
    cy.get(this.country).select(chooseCountry).should('have.value', numCountry)
    cy.get(this.btnSaveAddress).should('be.visible').click()
    cy.get(this.savedSuccessfully).should('have.text', success)
  }
}

export default AddressPage
