import signup from '../pages/SignupPage'

describe('Realização dos Testes Funcionais no Portal Corporativo', () => {

    beforeEach(function () {
        cy.log('Funções executadas ANTES de CADA caso de teste')
        cy.visit("/login")
        cy.fixture('datatest').then((d) => {
            this.datatest = d
            signup.loginUser(this.datatest.signup)
            signup.submit()
        })

    })

    it('Acessar a Pagina de Aprovação de Reservas', function () {

        cy.wait(2000)
        signup.gotoreservationapproval()



    })

})