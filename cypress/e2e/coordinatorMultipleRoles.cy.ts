describe("Testes com relação a mudança de papéis de um coordenador", () => {
  beforeEach(() => {
    cy.loginCoordinator();
  });

  it(`testa se a adição de outros papéis em uma conta 
    do tipo coordinator resulta na perda de acesso às páginas 
    que interessam ao coordenador`, () => {
    cy.get("a[id='menu-button']").click();
    cy.get("a").contains("Meu Perfil").click();

    cy.get("a[href*='users/manage_user']").contains("Editar").click();
    cy.get("label[for='1']").click();
    cy.get("label[for='3']").click();
    cy.get("button").contains("Salvar").click();

    cy.get("a[href='/academics/dashboard/']").should("be.visible");
  });
});
