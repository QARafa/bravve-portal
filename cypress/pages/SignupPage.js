class SingupPage {


    //URL Base:
    go() {

        cy.visit('/')

    }

    gohome(){
    
        cy.visit('/dashboards')

    }
    //Metodos de Login
    loginUser(datatest) {

        cy.get('input[ id="email"]').type(datatest.email)
        cy.get('input[ id="password"]').type(datatest.password)
        cy.get('.base-button > span').click()
    }

    loginUserError(datatestinv) {

        cy.wait(5000)
        cy.get('input[ id="email"]').type(datatestinv.email2)
        cy.get('input[ id="password"]').type(datatestinv.password2)
    }

    submit() {

        cy.get('button[class]').click()
        cy.wait(5000)


    }

    submitinv() {

        cy.get('button[class]').click()
        cy.wait(5000)
        cy.get('#app > main > form > div > span').should('have.text', 'E-mail ou senha inválidos, favor verificar e tentar novamente.')

    }
    //Metodos de utils:
    wait() {

        cy.wait(5000)

    }
    //Metodos página de Usuarios:
    gotousers(datatest) {

        cy.get('a[href="/usuarios"]').click()
        cy.wait(3000)
        cy.get('.search').type(datatest.name)
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', 'rafael.santos@foursys.com')
        cy.get('#table > tbody > tr:nth-child(1) > td:nth-child(6)').click()
        cy.wait(2000)
        cy.get('body > div.modal-overlay > div > div > div.modal-title > h2').should('have.text', 'Detalhes do usuário')


    }

    gotousersdetails(datatest) {

        cy.get('a[href="/usuarios"]').click()
        cy.wait(3000)
        cy.get('.search').type(datatest.name)
        cy.wait(2000)
        cy.get('#table > tbody > tr:nth-child(1) > td:nth-child(6)').click()
        cy.wait(2000)
        cy.get('body > div.modal-overlay > div > div > div.modal-title > h2').should('have.text', 'Detalhes do usuário')


    }
    //Metodos página de Locais:
    gotolacations() {

        cy.get('a[href="/locais"]').click()
        cy.get('#input-select').select('Religion Center LTDA').should('have.value', '96')
        cy.wait(2000)
        cy.get('#app > main > div.container > div.table-wrapper > div > table > tbody > tr > td:nth-child(1)').should('have.text', 'Inspire Bounty')
    }

    goregisterlacations(datatest) {

        cy.get('a[href="/locais"]').click()
        cy.get('#app > main > div.container > div.header-title > h2').should('have.text', 'Meus locais')
        cy.get('.base-button').click()
        cy.wait(5000)

        cy.log('Inclusão Dados Informações Gerais:')
        
        cy.get('.input-group > #select-partners').click()
        cy.get('.dropdown-content > :nth-child(2)').click()

        
        cy.get('input[id="businessName"]').type(datatest.localname)
        cy.get('input[id="registeredNumber"]').type(datatest.cnpj)
        cy.get('input[id="privateRoomQuantity"]').type(datatest.privaterooms)
        cy.get('input[id="meetingRoomQuantity"]').type(datatest.meetingrooms)
        cy.get('input[id="sharedDeskQuantity"]').type(datatest.workstation)
        
        cy.get('.input-group > #select-site-classification').click()
        cy.get('.dropdown-content > :nth-child(2)').click()

        cy.get('.primary').click()

        cy.log('Inclusão Dados do Endereço do Local:')
        cy.get('.form-title').should('have.text', 'Endereço do local')
        cy.get('input[id="postalCode"]').type(datatest.cep)
        //cy.get('input[id="Rua*"]').type(datatest.street)
        cy.get('input[id="streetNumber"]').type(datatest.localnumber)
        cy.get('input[id="complement"]').type(datatest.complement)
        //cy.get('input[id="Bairro*"]').type(datatest.district)
        //cy.get('#select-states > #input-select').select('SP').should('have.value', '4')
        cy.wait(3000)
        //cy.get('#select-cities > #input-select').select('São Paulo').should('have.value', '4855')

        cy.log('Inclusão Dados Longitude e Latitude:')
        cy.get('input[id="latitude"]').type(datatest.latitude)
        cy.get('input[id="longitude"]').type(datatest.longitude)
        cy.get('.primary').click()

        cy.log('Inclusão Dados Community Manager / Gestão do Espaço:')
        cy.get('input[id="name"]').type(datatest.communityname)
        cy.get('input[id="email"]').type(datatest.communityemail)
        cy.get('input[id="phone"]').type(datatest.communitynumber)

        cy.log('Inclusão Dados Contato Comercial:')
        cy.get('input[id="comercialName"]').type(datatest.commercialname)
        cy.get('input[id="comercialEmail"]').type(datatest.commercialemail)
        cy.get('input[id="comercialPhone"]').type(datatest.commercialnumber)

        cy.get('.primary > span').click()

        //inclusão seleção de Facilities:

        cy.get(':nth-child(1) > .wrapper-chips-checkbox > .chips-checkbox-label').click()
        cy.get(':nth-child(16) > .wrapper-chips-checkbox > .chips-checkbox-label').click()
        



    }
    //Metodos página de Parceiros:
    gotopartners(datatest) {

        cy.get('a[href="/parceiros"]').click()
        cy.wait(2000)
        cy.get('#app > main > div.container > div.filter-group > div > input').type(datatest.name)
        cy.wait(3000)
        cy.get('#app > main > div.container > div.table-wrapper > div > table > tbody > tr > td:nth-child(1)').should('have.text', 'Hall of Jewels LTDA')

    }

    gotoregisterpartners(datatest) {

        cy.get('a[href="/parceiros"]').click()
        cy.wait(2000)
        cy.get('.primary').click()
        cy.wait(2000)
        cy.log('Inclusão informações Gerais')
        cy.get('input[id="socialName"]').type('Quality Assurance Corp')
        cy.get('input[id="registeredNumber"]').type(datatest.cnpj)
        
        cy.get('input[id="select-market-segment"]').click()
        cy.get('.dropdown-content > :nth-child(3)').click()

        cy.get('input[id="select-componay-size"]').click()
        cy.get('.dropdown-content > :nth-child(3)').click()
        
        cy.get('input[id="select-componay-classification"]').click()
        cy.get('.dropdown-content > :nth-child(1)').click()
        
        cy.get('input[id="admPartnerName"]').type(datatest.partnername)
        cy.get('input[id="admPhone"]').type(datatest.partnernumber)
        cy.get('input[id="admEmail"]').type(datatest.corporateemail)
        cy.get('.primary > span').click()



        cy.wait(6000)
        cy.get('input[id="financialName"]').type(datatest.financialname)
        cy.get('input[id="financialPosition"]').type(datatest.responsibility)
        cy.get('input[id="financialEmail"]').type(datatest.financialemail)
        cy.get('input[id="financialPhone"]').type(datatest.financialnumber)

        cy.get('input[id="financialBankName"]').type(datatest.banking)
        cy.get('input[id="financialBankBranch"]').type(datatest.agency)
        cy.get('input[id="financialBankAccount"]').type(datatest.account)
        cy.get('.primary > span').click()
        cy.wait(5000)

        cy.get('input[id="contactName"]').type(datatest.contactname)
        cy.get('input[id="contactPosition"]').type(datatest.contactposition)
        cy.get('input[id="contactEmail"]').type(datatest.contactemail)
        cy.get('input[id="contactPhone"]').type(datatest.contactnumber)

        cy.get('.primary > span').click()



    }
    //Metodos Pagina de Espaços:
    goregisterspaces(datatest){

        cy.get('a[href="/espacos"]').click()
        cy.get('.base-button').click()
        cy.wait(2000)
        //cy.get('.subsidebar-title').should('have.text', 'Cadastrar o espaço')
        cy.log('Inclusão Dados Informações Gerais do Espaço:')
        
        cy.get('input[id="select-partners"]').click()
        cy.get('.dropdown-content > :nth-child(2)').click()
        cy.wait(3000)
       
        cy.get('input[id="select-cities"]').click()
        cy.wait(1000)
        cy.get('.dropdown-content > :nth-child(6)').click()
        
        cy.get('input[id="dataSpaceName"]').type(datatest.spacename)

        cy.get('input[id="select-space-type"]').click()
        cy.get('.dropdown-content > :nth-child(6)').click()

        cy.get('input[id="slogan"]').type(datatest.slogan)
        cy.get('textarea[id="Descrição do espaço*"]').type(datatest.spacedescription)
        
        cy.get('input[id="seatsQuantity"]').type(datatest.capacity)
        
        cy.get('input[id="select-noises"]').click()
        cy.get('.dropdown-content > :nth-child(2)').click()
        
        cy.get('input[id="select-categories"]').click()
        cy.get('.dropdown-content > :nth-child(1)').click()
        
        cy.get('input[id="select-classification"]').click()
        cy.get('.dropdown-content > :nth-child(5)').click()

        cy.get('input[id="sizeQuantity"]').type(datatest.footage)
        cy.get('.primary').click()

        cy.wait(3000)
        cy.log('Inclusão Dados de Cotratação:')
        cy.get(':nth-child(2) > :nth-child(1) > .form-control > .checkbox').click()
        cy.get('#app > main > div.c-container > form > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(1) > div').type(datatest.pricehour)
        cy.get(':nth-child(2) > :nth-child(2) > .form-control > .checkbox').click()
        cy.get('#app > main > div.c-container > form > div:nth-child(1) > div > div:nth-child(2) > div:nth-child(2) > div').type(datatest.priceday)

        cy.log('Inclusão Dados de Workpass:')
        cy.get('.group-form-input > .wrapper-switch > .switch > .slider').click()
        cy.get(':nth-child(3) > :nth-child(3) > .form-control > .checkbox').click()
        cy.get(':nth-child(3) > :nth-child(1) > .input-group-wrapper').type(datatest.passhour)
        cy.get(':nth-child(3) > :nth-child(2) > .input-group-wrapper').type(datatest.passday)

        cy.get('input[id="Remuneração por hora"]').type(datatest.remunerationhour)
        cy.get('input[id="Remuneração por dia"]').type(datatest.remunerationday)
        cy.get('.primary').click()

        cy.wait(3000)
        cy.log('Inclusão Dados de Funcionamento:')

        //Segunda-Feira
        cy.get(':nth-child(1) > .switch-day > .switch > .slider').click()
        cy.get(':nth-child(1) > .select-hours > #input-select-start > #input-select').select('08:00').should('have.value', '17')
        cy.get(':nth-child(1) > .select-hours > #input-select-end > #input-select').select('18:00').should('have.value', '37')

       //Terça-Feira
       cy.get(':nth-child(2) > .switch-day > .switch > .slider').click()
       cy.get(':nth-child(2) > .select-hours > #input-select-start > #input-select').select('08:00').should('have.value', '17')
       cy.get(':nth-child(2) > .select-hours > #input-select-end > #input-select').select('18:00').should('have.value', '37')

       //Quarda-Feira
       cy.get(':nth-child(3) > .switch-day > .switch > .slider').click()
       cy.get(':nth-child(3) > .select-hours > #input-select-start > #input-select').select('08:00').should('have.value', '17')
       cy.get(':nth-child(3) > .select-hours > #input-select-end > #input-select').select('18:00').should('have.value', '37')

       //Quinta-Feira
       cy.get(':nth-child(4) > .switch-day > .switch > .slider').click()
       cy.get(':nth-child(4) > .select-hours > #input-select-start > #input-select').select('08:00').should('have.value', '17')
       cy.get(':nth-child(4) > .select-hours > #input-select-end > #input-select').select('18:00').should('have.value', '37')

       //Sexta-Feira
       cy.get(':nth-child(5) > .switch-day > .switch > .slider').click()
       cy.get(':nth-child(5) > .select-hours > #input-select-start > #input-select').select('08:00').should('have.value', '17')
       cy.get(':nth-child(5) > .select-hours > #input-select-end > #input-select').select('18:00').should('have.value', '37')

       cy.get('.primary').click()

       cy.wait(3000)
       cy.log('Inclusão Dados de Detalhes de Espaço:')

       cy.get(':nth-child(1) > .wrapper-chips-checkbox > .chips-checkbox-label').click()
       cy.get(':nth-child(7) > .wrapper-chips-checkbox > .chips-checkbox-label').click()
       cy.get(':nth-child(28) > .wrapper-chips-checkbox > .chips-checkbox-label').click()

       //Anexar Foto
       
       cy.get('.info-icon > path').attachFile('/images/' + datatest.spacepictures)
       cy.wait(3000)
       //cy.get('.primary').click()
      
       //Gerar QA Code

       //cy.get('.subsidebar > div > :nth-child(6)').click()
       //cy.get('.base-button').click()


    }
    
     //Metodos Página de Reservas:
    gotoreservations() {

        cy.get('a[href="/reservas"]').click()
        cy.get('#app > main > div.container > div.table-wrapper > div.table-container > table > thead > tr > th:nth-child(6)').should('have.text', 'Status da reserva')

    }

    //Metodos Dashboard:
    gotodashboard() {

        cy.get('a[href="/dashboard"]').click()


    }

    //Metodos Clientes Corpotaviso
    goregistercorp(datatest){

        
        cy.log('Inserir informações Gerais')
        cy.get('a[href="/clientes-corporativos"]').click()
        cy.get('.primary').click()
        cy.wait(3000)
        cy.get('input[id="socialName"]').type(datatest.corpename)
        cy.get('input[id="registeredNumber"]').type(datatest.cnpj)

        cy.get('input[id="select-market-segment"]').click()
        cy.get('.dropdown-content > :nth-child(3)').click()

        cy.get('input[id="select-componay-size"]').click()
        cy.get('.dropdown-content > :nth-child(3)').click()

        cy.get('input[id="select-componay-classification"]').click()
        cy.get('.dropdown-content > :nth-child(3)').click()

        cy.get('input[id="matriz"]').click()

        //Endereço:

        cy.get('input[id="postalCode"]').type(datatest.cep) 
        cy.get('input[id="street"]').click()
        cy.wait(2000)
        cy.get('input[id="streetNumber"]').type(datatest.localnumer)

        //Dados Administrador do Cadastro:

        cy.get('input[id="admCorporateName"]').type(datatest.admname)
        cy.get('input[id="phone"]').type(datatest.admnumber)
        cy.get('input[id="emailCorp"]').type(datatest.admemail)
        cy.get('.primary > span').click()
        cy.wait(4000)
        cy.get('.modal-content > .base-button').click() 
        //cy.get('.subsidebar > div > :nth-child(3)').click()

        //Dados Informações Financeiras:

        cy.log('Inserir informações Financeiras')
        cy.get('input[id="financialName"]').type(datatest.financialname)
        cy.get('input[id="financialPosition"]').type(datatest.financialrole)
        cy.get('input[id="financialEmail"]').type(datatest.financialemail)
        cy.get('input[id="financialPhone"]').type(datatest.financialnumber)

        //Informações Bancárias:

        cy.get('input[id="financialBankName"]').type(datatest.bank)
        cy.get('input[id="financialBankBranch"]').type(datatest.agencynumber)
        cy.get('input[id="financialBankAccount"]').type(datatest.accountnumber)
        cy.get('#prepaid').click()
        cy.get('.primary > span').click()

        cy.get('.subsidebar > div > :nth-child(4)').click()

        //Informações de Contato:

        cy.log('Inserir informações de Contato')
        cy.get('input[id="contactName"]').type(datatest.infoname)
        cy.get('input[id="contactPosition"]').type(datatest.inforole)
        cy.get('input[id="contactEmail"]').type(datatest.infoemail)
        cy.get('input[id="contactPhone"]').type(datatest.infonumber)

        cy.get('.primary > span').click()
















    }
    
    //Metodos Newsletter
    gotonewslatter(datatest){


        cy.log('Realizar acesso ao Newslatter e pesquisar um usuario')
        cy.get('a[href="/newsletter"]').click()
        cy.wait(5000)
        cy.get('.input-search').type(datatest.name)
        cy.wait(2000)
        cy.get('tbody > .table-row > :nth-child(1)').should('have.text', 'Rafael Moreira')
        

        

    }

    //Metodos Assinaturas e Creditos:
    gotopaycredits(datatest){

        cy.get('a[href="/assinaturas-creditos"]').click()
        cy.wait(4000)
        cy.get('.input-search').type(datatest.corporatename)

   } 

   //Metodos Aprovação de Reserva:

   gotoreservationapproval(){

    cy.get('a[href="/aprovacao-reservas"]').click()
    cy.wait(4000)
       
   }
      
   //Metodos Voucher:

   gotoopenvoucher(){
    cy.log('Realizar Acesso a Pagina de Voucher e Realizar Cadastro')
    cy.get('a[href="/campanhas"]').click()

   }

   gotovoucher(datatest){
   
    //Nova Campanha
    cy.get('.title-button > .base-button').click()
    //Gerar Código
    cy.get('.group-form-input-itens > .base-button').click()

    cy.get('.input-group > #select-voucher-types').click()
    cy.wait(2000)
    cy.get('.dropdown-content > :nth-child(3)').click()

    cy.get('input[id="voucherValue"]').type(datatest.value)

    cy.get('.input-group > #select-usage-types').click()
    cy.wait(2000)
    cy.get('.dropdown-content > :nth-child(1)').click()

    cy.get('.input-group > #select-usage-types-user').click()
    cy.wait(2000)
    cy.get('.dropdown-content > :nth-child(1)').click()

    //Data Inicial e Final:
    cy.get('#start_ts').type(datatest.inicialdate)
    cy.get('#end_ts').type(datatest.enddate)

    cy.get('.input-group > #select-filter-types').click()
    cy.get('.dropdown-content > :nth-child(1)').click()

    //Salvar
    //cy.get('.primary > span').click()

   }

   gotovoucher2(){

    cy.wait(2000)

    cy.get('.title-button > .base-button').click()

    //Salvar
    cy.get('.primary > span').click()

    //Validações Mensagens:

    cy.get('.group-form-input-itens > :nth-child(1) > .has-error-label > span').should('have.text', 'O código de voucher é obrigatório')
    cy.get(':nth-child(3) > [disabled="false"] > .has-error-label > span').should('have.text', 'O tipo de voucher é obrigatório')
    cy.get(':nth-child(5) > [disabled="false"] > .has-error-label > span').should('have.text', 'O uso do voucher é obrigatório')
    cy.get(':nth-child(6) > [disabled="false"] > .has-error-label > span').should('have.text', 'A distribuição por usuário é obrigatória')
    cy.get(':nth-child(7) > .has-error-label > span').should('have.text', 'A data de início é obrigatória')
    cy.get(':nth-child(8) > .has-error-label > span').should('have.text', 'A data de término é obrigatória')
    cy.get(':nth-child(9) > [disabled="false"] > .has-error-label > span').should('have.text', 'O tipo de filtro é obrigatório')
     
   }

   gotovoucher3(datatest){
  
    //Nova Campanha
    cy.get('.title-button > .base-button').click()
    //Gerar Código
    cy.get('input[id="voucherCode"]').type("copa2022teste")

    cy.get('.input-group > #select-voucher-types').click()
    cy.wait(2000)
    cy.get('.dropdown-content > :nth-child(3)').click()

    cy.get('input[id="voucherValue"]').type(datatest.value)

    cy.get('.input-group > #select-usage-types').click()
    cy.wait(2000)
    cy.get('.dropdown-content > :nth-child(1)').click()

    cy.get('.input-group > #select-usage-types-user').click()
    cy.wait(2000)
    cy.get('.dropdown-content > :nth-child(1)').click()

    //Data Inicial e Final:
    cy.get('#start_ts').type(datatest.inicialdate)
    cy.get('#end_ts').type(datatest.enddate)

    cy.get('.input-group > #select-filter-types').click()
    cy.get('.dropdown-content > :nth-child(1)').click()

    //Salvar
    //cy.get('.primary > span').click()

   }

   gotosearch(datatest){

    cy.log('Realizar Busca de um Voucher existente')
    cy.get('a[href="/campanhas"]').click()
    cy.wait(2000)

    //Realizar Pesquisa

    cy.get('.input-search').type(datatest.search)
    cy.get('.filter-group > .base-button').click()


   //Confirmação:
   
   cy.get('tbody > .table-row > :nth-child(1)').should("have.text", "TESTEQA2022")
   
    


   }

   gotoeditvoucher(datatest){
   
    cy.get(':nth-child(1) > :nth-child(5) > svg').click()
    cy.wait(2000)
   
   
   }

   govoucherfilter(datatest){
    
    cy.get('.group-form-input-itens > .primary > span').click()
    cy.wait(2000)

   }

   gofilterselect(datatest){
      
      cy.log('Passar e Retornar Todos os Clientes para Disponivel ao Voucher e Indisponivel')
     
      cy.get('.group-form-input-itens > .group-button > :nth-child(2)').click()
      cy.wait(2000)
      cy.get('.group-button > :nth-child(4)').click()

      cy.log('Selecionar de Forma Específica e Pesquisando um Parceiro')

      cy.get(':nth-child(2) > :nth-child(1) > .form-control > .info-check').click()
      cy.get(':nth-child(4) > :nth-child(1) > .form-control > .info-check').click()

      cy.get('.group-form-input-itens > .group-button > :nth-child(1)').click()

      //Pesquisar e Selecionar Local:

      cy.get(':nth-child(1) > .input-search').type(datatest.socialname)
      cy.get(':nth-child(1) > table > tbody > .table-row > :nth-child(1) > .form-control > .info-check').click()
      cy.get('.group-form-input-itens > .group-button > :nth-child(1)').click()

      cy.get('.wrapper-button > .primary > span').click()

   
   }

   gocleanfilter(){

    cy.log('Limpar Filtros do Voucher')
    cy.get('.group-form-input-itens > .primary > span').click()
    cy.get('.group-button > :nth-child(4)').click()
    cy.get('.wrapper-button > .primary > span').click()



   }
   
   govouchertab(){

    
    cy.get('[for="Ativos"]').click()
    cy.log('Validar Ativos')
    cy.get(':nth-child(1) > .chips-center > .chips').should("have.text", "Ativo")
    cy.wait(3000)
    cy.get('[for="Expirados"]').click()
    cy.log('Validar Expirado')
    cy.get(':nth-child(1) > .chips-center > .chips').should("have.text", "Expirado")


   }

  

}

export default new SingupPage;