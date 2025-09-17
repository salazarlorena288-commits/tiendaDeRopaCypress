// cypress/e2e/home.cy.js
describe("Prueba Visita tienda ", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Nombre de sitio visible", () => {
    cy.get(".bsk-custom-logo-container").should("be.visible");
  });

  it("Visibilidad de imagen vista principal", () => {
    cy.get(
      ":nth-child(1) > .gender-selector__image-button > .gender-selector__image"
    ).should("be.visible");
    cy.get(
      ":nth-child(2) > .gender-selector__image-button > .gender-selector__image"
    ).should("be.visible");
    cy.get(
      ":nth-child(3) > .gender-selector__image-button > .gender-selector__image"
    ).should("be.visible");
  });

  it("Seleccion de seccion", () => {
    cy.get(
      ":nth-child(1) > .gender-selector__image-button > .gender-selector__image"
    ).click();
  });

  it("Seleccion de producto 1"),
    () => {
      cy.get(
        ":nth-child(2) > .cms-slide-trends__link > .cms-slide-trends__image-wrapper > .image-item-wrapper > .image-item"
      ).click();
    };
});
