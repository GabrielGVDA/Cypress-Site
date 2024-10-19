import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage();

describe('Orange HRM Test', () => {

  const selectorsList = {
    sectionTitleTopBar: "oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    MyInfobutton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton: ".--close",
    submitButton: ".orangehrm-left-space"
  }

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData)

    cy.location('pathname').should('equal',  '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.MyInfobutton)
    cy.get(selectorsList.firstNameField).clear().type('firstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorsList.genericField).eq(9).clear().type('sinNumberTest')
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')

    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
    cy.get(selectorsList.thirdItemCombobox).click()
  });

  it('Login - Failed', () => {
    cy.visit('/auth/login');
    cy.get(selectorsList.usernamefield).type(userData.userFail.username)
    cy.get(selectorsList.passwordfield).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click();
    cy.get(selectorsList.wrongCredentialAlert)
  });
});
