export class signInPO {

  create_email = "#email_create";
  click_create = "#SubmitCreate > span";

  typeEmail(email: string) {
    cy.get(this.create_email).type(email);
  }
  clickCreate() {
    cy.get(this.click_create).click();
  }
}
