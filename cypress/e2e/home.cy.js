describe('Homepage', () => {
    it('renders a main heading', () => {
        cy.visit('https://compl-alim.beta.gouv.fr/accueil');

        cy.findByRole('heading', { level: 1 })
            .should('be.visible')
            .should('have.text', 'Vers une circulation de compléments alimentaires sûrs et conformes')
    })
    it('display results on search', () => {
        cy.visit('https://compl-alim.beta.gouv.fr/entreprises');

        cy.findByRole('textbox', { name: /Cherchez un ingrédient/ })
            .type('foo')
        cy.get('button.fr-btn.fr-btn--md.inline-flex.justify-center.max-h-10.mt-2.rounded-r')
            .click();
        cy.findByRole('heading', { level: 1 })
            .should('text.contains', 'Nous n\'avons pas trouvé de résultats pour « foo »')
        cy.findByText('Nous n\'avons pas trouvé de résultats pour « foo »')
            .should('be.visible')
    })
})
