import userData from '../fixtures/userData.json'
import LoginPage from '../downloads/pages/LoginPage.js'
import DashboardPage from '../downloads/pages/dashBoardPage.js'
import MenuPage from '../downloads/pages/MenuPage.js'

const menuPage = new MenuPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage() 

describe('Orange HRM Test', () => {

  const selectorsList = {
    firstNameField: "[name='firstName']", 
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dateField: "[placeholder='yyyy-mm-dd']",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
    dateCloseButton: ".--close",
    submitButton: ".orangehrm-left-space",
  };
it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithValidUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    cy.get(selectorsList.firstNameField).should('exist').clear().type('firstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(7).clear({ force: true }).type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click();
    cy.get(selectorsList.genericField).eq(8).type('ssnNumberTest')
    cy.get(selectorsList.genericField).eq(9).clear({ force: true }).type('sinNumberTest')
    cy.get(selectorsList.submitButton).eq(0).click({ force: true })
    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
    cy.get(selectorsList.thirdItemCombobox).click()
  });

  it('Login - Failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithInvalidUser(userData.userFail.username, userData.userFail.password)
  });
});