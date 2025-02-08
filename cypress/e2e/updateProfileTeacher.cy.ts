describe("Testar alterações de dados do pefil do professor", () => {
  beforeEach(() => {
    cy.loginProfessor();
    cy.intercept("/users/manage_user/*/").as("GetUser");
  });

  it("Atualizar informações pessoais do perfil do professor", () => {
    cy.get("a[id='menu-button']").click();
    cy.get("a").contains("Meu Perfil").click();
    cy.get("a").contains("Editar").click();
    cy.wait("@GetUser").then(({ response }) => {
      expect(response.statusCode).not.equal(403);
    });
  });
});
