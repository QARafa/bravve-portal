import signup from '../pages/SignupPage'

describe('Realização dos Testes Funcionais no Portal Corporativo', () => {

    beforeEach(function () {
        cy.log('Funções executadas ANTES de CADA caso de teste')
        cy.visit("/login")
        cy.fixture('datatest').then((d) => {
            this.datatest = d
        signup.loginUser(this.datatest.signup2)
        signup.submit()
        })

    })

    it('Deve realizar acesso a Pagina de Newslatter e Pesquisar um Usuario', function () {

        
        signup.gotonewslatter(this.datatest.newslatter)


    })
})    