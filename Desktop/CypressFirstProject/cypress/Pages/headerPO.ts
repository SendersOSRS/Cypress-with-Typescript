export class headerPO {
    
    login = ".login";

    loginButton() {
        cy.get(this.login).click();
      }
  }
  