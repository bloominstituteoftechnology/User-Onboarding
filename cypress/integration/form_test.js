import { iteratee } from "lodash"
import { hasUncaughtExceptionCaptureCallback } from "process"

describe('Form App',() => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

const nameInput = () => cy.get('input[name=name')
const emailInput = () => cy.get('input[name=email]')
const passwordInput = () => cy.get('input[name=password]')
const tosBox = () => cy.get('input[name=tos]')

it('sanity check',() => {
    expect(1+2).to.equal(3)
    expect(2+2).not.to.equal(5)
})


})