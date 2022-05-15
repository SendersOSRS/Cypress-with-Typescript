export class homePagePO {

  sign_in = ".login";
  
  clickSigninButton(){
  cy.get(this.sign_in).click();
  }

}
