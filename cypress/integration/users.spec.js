import signup from '../pages/SignupPage'

describe('Realização dos Testes Funcionais no Portal Corporativo', () => {

    beforeEach(function () {
        cy.log('Funções executadas ANTES de CADA caso de teste')
        signup.go()
        cy.fixture('datatest').then((d) => {
            this.datatest = d
        })

    })

    it('Deve Abrir o Portal, acessar página de Usuários e pesquisar um Usuario Cadastrado', function () {

        signup.loginUser(this.datatest.signup)
        signup.submit()
        signup.gotousers(this.datatest.username)
        signup.wait()

    })



})