describe("Testa a recuperação da foto do perfil de um discente", () => {
  beforeEach(() => {
    cy.loginCoordinator();
    cy.intercept("/media/students/*").as("fotoEstudante");
  });

  it("atualiza a foto de perfil da estudante Ameinda e verifica sua exibição", () => {
    cy.get("a[href='/academics/dashboard/']").last().click();
    cy.get("a").contains("Discentes").click();
    cy.get("tr")
      .contains("Ameinda")
      .parent()
      .find("a[href*='edit_student_data']")
      .click();

    cy.get("input[type='file']").selectFile("./cypress/fixtures/ameinda.jpg");
    cy.get("button[id='submit-button']").click();
    cy.wait("@fotoEstudante").then(({ response }) => {
      expect(response.statusCode).to.be.equal(200);
    });
  });
});
