describe("Testa a atualização da quantidade de semestres no curso", () => {
  beforeEach(() => {
    cy.loginCoordinator();
  });

  it("Testa se campo de quantidade de semestres no curso reflete valor atualizado", () => {
    cy.get("a[href='/academics/dashboard/']").last().click();
    cy.get("a").contains("Cursos").click();
    cy.get("a[href='/academics/course/create/']").click();
    const nomeCursoTest = `Curso Teste ${Math.ceil(Math.random() * 1000000)}`;
    cy.get("input[id='id_name']").type(nomeCursoTest);
    cy.get("select[id='id_period']").select("MORNING");
    cy.get("select[id='id_duration_type']").select("SEMESTER");
    cy.get("input[id='id_number_of_periods']").type("10");
    cy.get("select[id='id_course_type']").select("Técnico Integrado Regular");
    cy.get("button").contains(" Salvar ").click();
    cy.get("input[placeholder='Pesquisar...']").last().type(nomeCursoTest);
    cy.get("button").contains("Filtrar").click();
    cy.get("a[href*='/academics/course/update']").click();
    cy.get("input[id='id_number_of_periods']").should("have.value", "10");
  });
});
