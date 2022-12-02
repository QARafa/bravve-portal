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

    it('Deve realizar o acesso a página de Parceiros e Realizar a Pesquisa por Razão Social', function () {

        
        cy.wait(5000)
        signup.gotopartners(this.datatest.comporate_name)


    })

})