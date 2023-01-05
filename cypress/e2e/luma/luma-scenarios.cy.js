/// <reference types="cypress" />

/*Algumas informações: Não considerei atribuir commands pois não julguei necessário, por se tratar de somente um cenário. Também optei por não utilizar faker na senha pois ela não necessariamente precisa mudar. Caso o cenário fosse para testar diferentes tipos de senha, daí sim seria necessário sua implementação. Na hora de editar o endereço, decidi colocar aqueles parâmetros para ficar mais fácil a mudança caso seja necessário, podendo ser utilizado em outros cenários:
         chooseState = nome do estado conforme o site
         numState = value do estado conforme o site
         formatZipCode = o formato que deseja utilizar no faker para a criação do CEP
         chooseCountry = nome do país conforme o site
         numCountry = value do país conforme o site
         success = a frase para validar se o endereço foi de fato cadastrado
         */

import CreateAccount from '../../pages/create-account-page'
import AddressPage from '../../pages/address-page'
import HomePage from '../../pages/home-page'

describe('luma', () => {
  const createAccount = new CreateAccount()
  const addressPage = new AddressPage()
  const homePage = new HomePage()

  beforeEach(() => {
    createAccount.access()
  })

  it('Cadastrar novo usuário com sucesso e adicionar novo endereço', () => {
    //create account
    createAccount.accessSignUp()
    createAccount.create('123456789brasilGrande@123') // considerar colocar um parâmetro para confirmarPassword, assim o teste poderia
    //  ser reutilizado em cenarios que a senha deva ser diferente

    // add address
    addressPage.accessAddress()
    addressPage.fillFields(
      'Alabama',
      '1',
      '#####-####',
      'United States',
      'US',
      'You saved the address.'
    ) //fillFields(chooseState, numState, formatZipCode, chooseCountry, numCountry, success) - Parâmetros explicados na Algumas informações

    //ir para home
    homePage.goToHomePage()
    homePage.validateHome('My Account')
  })
})
