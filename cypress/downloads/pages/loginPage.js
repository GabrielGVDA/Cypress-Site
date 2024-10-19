class LoginPage {
    
    selectorList() {
        const selectors = {
            usernameBox: "[name='username']",
            passwordBox: "[name='password']",
            loginButton: "[type='submit']",
        }    
        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }    

    loginWithUser(username, password) {
        cy.get(this.selectorList().usernameBox).type(username)
        cy.get(this.selectorList().passwordBox).type(password)
        cy.get(this.selectorList().loginButton).click()
    }
}   

export default LoginPage