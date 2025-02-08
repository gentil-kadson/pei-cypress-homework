describe("Diz respeito a funcionalidade de editar um PEI como professor", () => {
  beforeEach(() => {
    cy.loginProfessor();
  });

  it("Tenta editar um PEI", () => {
    cy.get("a[href='?&status=NOT_START']").click();
    cy.get("input[name='search']").click().type("Ameinda");
    cy.get("button").contains("Filtrar").click();
    cy.get("a[href*='/educational_plan/peis/update']").click();

    cy.on("window:load", () => {
      cy.get("article[role='alert']")
        .contains("Você não tem permissão para editar este PEI.")
        .should("not.be.visible");
    });
  });
});
