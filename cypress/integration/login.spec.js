
import signup from '../pages/SignupPage'

describe('Realização dos Testes Funcionais no Portal Corporativo', () => {

    beforeEach(function () {
        cy.log('Funções executadas ANTES de CADA caso de teste')
        cy.visit("/login")
        cy.fixture('datatest').then((d) => {
            this.datatest = d
        })

    })

    it('Deve Abrir o Portal e Realizar o Login', function () {

        signup.loginUser(this.datatest.signup)
        signup.submit()
        signup.wait()

    })

    it('Deve Abrir o Portal e Realizar o Login com Password Errado', function () {

        signup.loginUser(this.datatest.signupinv)
        signup.submitinv()
        signup.wait()

    })






})

