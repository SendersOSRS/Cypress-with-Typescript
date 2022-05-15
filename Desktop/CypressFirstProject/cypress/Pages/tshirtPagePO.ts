export class tshirtPagePO {

  click_tshirt = ".sf-menu > :nth-child(3) > a";
  click_more = ".lnk_view > span";
  choose_size = '#group_1'
  choose_color = '#color_14'
  add_to_cart = '.exclusive > span'
  continue_shopping = '.continue > span'

  clickTshirtsPage() {
    cy.get(this.click_tshirt).click();
 }
 clickMore(){
    cy.get(this.click_more).click();
 }
chooseSize(){
    cy.get(this.choose_size).select('M')
}
chooseColor(){
    cy.get(this.choose_color).click();
}
addToCart(){
    cy.get(this.add_to_cart).click();
}
continueShopping() {
    cy.get(this.continue_shopping).click();
}
}
