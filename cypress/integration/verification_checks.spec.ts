describe("Verification Checks", () => {
  it("should load the checks successfully", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-testid=verification-0]").should("exist");
    cy.get("[data-testid=verification-1]").should("exist");
    cy.get("[data-testid=verification-2]").should("exist");
    cy.get("[data-testid=verification-3]").should("exist");
  });

  it("should allow all Yes answers to verification checks", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-testid=click-yes-0]").click();
    cy.get("[data-testid=click-yes-1]").click();
    cy.get("[data-testid=click-yes-2]").click();
    cy.get("[data-testid=click-yes-3]").click();

    cy.get("[data-testid=submit-checks]").should("not.be.disabled").click();

    cy.on("window:alert", (str) => {
      expect(str).to.contain("Success!");
    });
  });

  it("should allow No answer to verification checks", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-testid=click-yes-0]").click();
    cy.get("[data-testid=click-yes-1]").click();
    cy.get("[data-testid=click-no-2]").click();

    cy.get("[data-testid=submit-checks]").should("not.be.disabled").click();

    cy.on("window:alert", (str) => {
      expect(str).to.contain("Success!");
    });
  });

  it("should keep Submit button disabled while the checks are not fully answered", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-testid=click-yes-0]").click();
    cy.get("[data-testid=click-yes-1]").click();

    cy.get("[data-testid=submit-checks]").should("be.disabled");
  });

  it("should be accessible with keyboard to allow all Yes answers to verification checks", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-testid=click-yes-0]").type("1");
    cy.get("[data-testid=click-yes-0]").type("{downarrow}");
    cy.get("[data-testid=click-yes-1]").type("1");
    cy.get("[data-testid=click-yes-1]").type("{downarrow}");
    cy.get("[data-testid=click-yes-2]").type("1");
    cy.get("[data-testid=click-yes-3]").type("{downarrow}");
    cy.get("[data-testid=click-yes-3]").type("1");

    cy.get("[data-testid=submit-checks]").should("not.be.disabled").click();

    cy.on("window:alert", (str) => {
      expect(str).to.contain("Success!");
    });
  });

  it("should be accessible with keyboard to allow No answer to verification checks", () => {
    cy.visit("http://localhost:3000");

    cy.get("[data-testid=click-yes-0]").type("1");
    cy.get("[data-testid=click-yes-0]").type("{downarrow}");
    cy.get("[data-testid=click-yes-1]").type("1");
    cy.get("[data-testid=click-yes-1]").type("{downarrow}");
    cy.get("[data-testid=click-no-2]").type("2");

    cy.get("[data-testid=submit-checks]").should("not.be.disabled").click();

    cy.on("window:alert", (str) => {
      expect(str).to.contain("Success!");
    });
  });
});
