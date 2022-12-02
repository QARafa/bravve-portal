import signup from '../pages/SignupPage'

describe('Realização dos Testes Funcionais no Portal Corporativo', () => {

    beforeEach(function () {
        cy.log('Funções executadas ANTES de CADA caso de teste')
        cy.visit("/login")
        cy.fixture('datatest').then((d) => {
            this.datatest = d
            signup.loginUser(this.datatest.signup2)
            cy.wait(2000)
            signup.submit()
        })

    })

    it('Realizar acesso a pagina de Locais e Cadastrar um Local', function () {
       
        signup.goregisterlacations(this.datatest.localinfo)
        cy.wait(2000)

    })

})