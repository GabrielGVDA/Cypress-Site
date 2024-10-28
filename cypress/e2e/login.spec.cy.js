import userData from '../fixtures/userData.json'
import LoginPage from '../downloads/pages/LoginPage.js'
import DashboardPage from '../downloads/pages/dashBoardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login - Orange HRM Test', () => {

    it('Login - Fail', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithValidUser(userData.userFail.username, userData.userFail.password)
        
    })

    it('Login - Success', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithInvalidUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage()
    })
})
