import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('monaca data registration', function () {
        it('Create new objectId', function () {
            cy.viewport('iphone-x')
            cy.visit('http://localhost:8080')
    
            // assert the element's text includes the given substring
            cy.get('h1').should('have.text', 'NIFCLOUDmobile backend!')
            cy.get('div').should('have.text', 'Touch Start Demo to save {"message":"Hello, NCMB!"} to mobile backend.')
            cy.get('a').should('have.contain', 'Start Demo')
            
            // check alert
            cy.get('a').contains('Start Demo').click()
            cy.wait(2000)
            cy.on('window:alert', (str) => {
                expect(str).to.match(/^New object created with objectId: /)
            })
        })
    })
})