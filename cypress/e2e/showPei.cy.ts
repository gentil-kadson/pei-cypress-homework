describe('testa exibição dos PEIs', () => {
    beforeEach(() => {
        cy.loginProfessor()
    });

    it.skip('se autentica como professor e verifica se aparecem apenas os PEIs associados ao seu perfil', () => {
        cy.get("table").find("td").contains("Nenhum PEI cadastrado.").should("not.exist")
    });

    it('ao clicar em “meus peis não iniciados”, deve mostrar apenas o PEI associado ao professor autenticado', () => {
        cy.get("div").contains("Meus PEIs não iniciados").click()
        cy.get("table").find("tbody").find("tr")
            .each(($tr) => {
                cy.wrap($tr)             
                    .should('contain', 'grupo2');
            })
    });
});