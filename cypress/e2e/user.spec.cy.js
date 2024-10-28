import userData from '../fixtures/userData.json'
import LoginPage from '../downloads/pages/LoginPage.js'
import DashboardPage from '../downloads/pages/dashBoardPage.js'
import MenuPage from '../downloads/pages/MenuPage.js'
import MyInfoPage from '../downloads/pages/myInfoPage.js/index.js'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('User Menu - Orange HRM Test', () => {

    before(() => {
        loginPage.accessLoginPage()
        loginPage.loginWithValidUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboardPage()
    })

    it('Fill User Information', () => {
        menuPage.accessMyInfo()
        
        myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
        myInfoPage.fillEmployeeDetails('EmployId', 'otherId', 'Drivers Number', '2025-07-29', '123456', '0987654')
        myInfoPage.fillStatus()
        myInfoPage.saveForm()
    })
})
