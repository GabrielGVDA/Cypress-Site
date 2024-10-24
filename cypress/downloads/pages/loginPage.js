class LoginPage {
    
    selectorList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            checkAccessInvalid: "[role='alert']"
        }   

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }    

    loginWithValidUser(username, password) {
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }
    loginWithInvalidUser(username, password){
         cy.get(this.selectorList().usernameField).type(username)
         cy.get(this.selectorList().passwordField).type(password)
         cy.get(this.selectorList().loginButton).click()
         cy.get(this.selectorList().checkAccessInvalid)
    }
   
}   

export default LoginPage
