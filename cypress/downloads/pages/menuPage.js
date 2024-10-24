class menuPage {
    selectorsList(){
        const selectors = {
            MyInfobutton: '[href="/web/index.php/pim/viewMyDetails"]',
            PerformanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            RecruitmentButton:  '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
            TimeButton: '[href="/web/index.php/time/viewTimeModule"]',
            DirectoryButton: '[href="/web/index.php/directory/viewDirectory"]',
            MaintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
            ClaimButton: '[href="/web/index.php/claim/viewClaimModule"]',
            BuzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
            LeaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
            PimButton: '[href="/web/index.php/pim/viewPimModule"]',
            AdminButton: '[href="/web/index.php/admin/viewAdminModule"]',

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