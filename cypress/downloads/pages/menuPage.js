class menuPage {
    selectorsList(){
        const selectors = {
            MyInfobutton: '[href="/web/index.php/pim/viewMyDetails"]',
            PerformanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',

        }
        return selectors
    }
    accessMyInfo(){
        cy.get(this.selectorsList().MyInfobutton).click()

    }
    accessorPerformance(){
        cy.get(this.selectorsList().PerformanceButton).click()
    }
}

export default menuPage