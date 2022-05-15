export class dressPagePO {

click_dress = ".sf-menu > :nth-child(2) > .sf-with-ul";
//   click_more = '.first-in-line.last-line > .product-container > .right-block > .button-container > .lnk_view > span'
//   increase_quantity = '.icon-plus'
//   choose_size = '#group_1'
//   choose_color = '#color_8'
//   add_to_cart = '.exclusive > span'
  
clickDressPage() {
    cy.get(this.click_dress).click();
}
addToCart(locator: string) {
    cy.get(locator).eq(0).click();
}



// clickMore() {
//     cy.get(this.click_more).click();
// }
// increaseQuantityByOne() {
//     cy.get(this.increase_quantity).click();
// }
// chooseSize() {
//     cy.get(this.choose_size).select('M');
// }
// chooseColor() {
//     cy.get(this.choose_color).click();
// }

  }

