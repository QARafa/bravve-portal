import signup from '../pages/SignupPage'

describe('Realização dos Testes Funcionais no Portal Corporativo', () => {

    beforeEach(function () {
        cy.log('Funções executadas ANTES de CADA caso de teste')
        cy.visit("/login")
        cy.fixture('datatest').then((d) => {
            this.datatest = d
        signup.loginUser(this.datatest.signup2)
        signup.submit()
        cy.wait(2000)
        signup.gohome()
        })

    })

    it('Acessar Pagina de Voucher e Realizar Cadastro', function () {
        
        cy.wait(5000)
        signup.gotoopenvoucher()
        signup.gotovoucher(this.datatest.voucher)
       


    })
    
    it('Acessar Pagina de Voucher e Realizar Cadastro Inserindo o Voucher', function () {
        
        cy.wait(5000)
        signup.gotoopenvoucher()
        signup.gotovoucher3(this.datatest.voucher)
       
    })

    it('Acessar pagina de Voucher e Validar Mensagens de Campos Obrigatórios', function () {
        
        signup.gotoopenvoucher()
        signup.gotovoucher2(this.datatest.voucher)


    })

    it('Acessar pagina de Voucher e Pesquisar um Voucher Existente', function () {
        
        signup.gotosearch(this.datatest.voucher)


    })

    it('Acessar pagina de Voucher e Editar E Configurar Filtros', function () {
        
        signup.gotosearch(this.datatest.voucher)
        signup.gotoeditvoucher(this.datatest.voucher)
        signup.govoucherfilter(this.datatest.voucher)
        signup.gofilterselect(this.datatest.voucher)
        signup.gocleanfilter()


    })

    it('Acessar pagina de Voucher e Validar o Funcionamento das Abas TODOS,ATIVOS e Expirados ', function () {
        
        signup.gotoopenvoucher()
        signup.govouchertab()


    })


})