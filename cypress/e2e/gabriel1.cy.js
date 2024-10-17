import userData from '../fixtures/userData.json'
describe('Orange HRM Test', () => {

  const selectorsList = {
    usernamefield: "[name='username']",
    passwordfield: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text"
  }

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernamefield).type('Admin')  
    cy.get(selectorsList.passwordfield).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Failed', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernamefield).type('AdTmin')  
    cy.get(selectorsList.passwordfield).type('Teste')
    cy.get(selectorsList.loginButton).click()
  })
})
