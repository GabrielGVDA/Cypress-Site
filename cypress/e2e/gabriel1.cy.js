const userdata = require('../fixtures/user-data.json');
describe('Orange HRM Test', () => {

  const selectorsList = {
    usernamefield: "[name='username']",
    passwordfield: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    MyInfobutton: "[href='/web/index.php/pim/viewMyDetails']",
    FirstName: "[name='firstName']",
    Middlename: "[name='middleName']",
    Finalname: "[name='lastName']",
    GenericBox: ".oxd-input",
    Closebutton: ".--close",
    SaveButton: "[type='submit']"
  }

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernamefield).type('Admin')  
    cy.get(selectorsList.passwordfield).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    cy.get(selectorsList.MyInfobutton).click()

    // Manipulação de campos
    cy.get(selectorsList.FirstName).clear().type('FirstNameTest')
    cy.get(selectorsList.Finalname).clear().type('LastNameTest')
    cy.get(selectorsList.GenericBox).eq(3).clear().type('NicknameTest')
    cy.get(selectorsList.GenericBox).eq(4).clear().type('Employee')
    cy.get(selectorsList.GenericBox).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.GenericBox).eq(6).clear().type('DriverLicenseTest')
    cy.get(selectorsList.GenericBox).eq(7).type('2001-09-11')
    cy.get(selectorsList.Closebutton).click()
    cy.get(selectorsList.GenericBox).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorsList.GenericBox).eq(9).clear().type('sinNumberTest')
    cy.get(selectorsList.SaveButton).eq(0).click()
  })

  it('Login - Failed', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernamefield).type('AdTmin')  
    cy.get(selectorsList.passwordfield).type('Teste')
    cy.get(selectorsList.loginButton).click()
  })
})
