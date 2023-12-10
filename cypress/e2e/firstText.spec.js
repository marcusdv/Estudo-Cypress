// ativa o intelisense
/// <reference types="cypress" />

describe('Primeiro conjunto de testes', () => {

    it('primeiro teste', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // pelo name
        cy.get('input')

        // pelo id
        cy.get('#inputEmail1')

        // pela classe
        cy.get('.input-full-width')

        // por atributo
        cy.get('[fullwidth]')

        // por atributo e valor
        cy.get('[placeholder="Email"]')

        // pelo atributo classe INTEIRO
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // por dois atributos
        cy.get('[placeholder="Email"][fullwidth]')

        // por tag name, atributo, id e classe
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // por tag id cypress (maneira mais recomendada)
        cy.get('[data-cy="imputEmail1"]')
    })

    it('second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // Teoria
        // get() -> acha elementos na página pelo locator GLOBALMENTE, SEMPRE
        // find() -> acha elemento filho pelo locator
        // contains() -> acha texto HTML e por texto e locator

        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')
        cy.contains('nb-card', 'Horizontal form').get('button') // global


        //cypress chains and DOM
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()
    })


    it('save subject of the command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // Cypress é assicrono então isso não funciona
        // const usingTheGrid =  cy.contains('nb-card', 'Using the Grid')
        // usingTheGrid.find('[for="inputEmail"]')

        // Cypress Alias
        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')


        // Cypress then() methods
        cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
            // wrap para transformar num ?elemento cypress?
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email')
        })
    })

    it.only('extract text values', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2
        cy.get('[for="exampleInputEmail1"]').then(label => {
            const labelText = label.text()

        })
    })


})


