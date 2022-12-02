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

    it('Deve realizar o acesso a página de Cliente Corporativo e Realizar o Cadastro', function () {
        
        //Necessario Mudar Massa de Dados Informações Gerais (Campos Telefone e Email)
        cy.wait(5000)
        signup.goregistercorp(this.datatest.corpinfo)
       


    })

})