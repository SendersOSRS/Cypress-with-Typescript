export class checkoutPO {

    proceed_to_checkout = '.button-container > .button-medium > span'
    click_checkout_button = '.cart_navigation > .button > span'
    delivery_instructions = '#ordermsg > .form-control'
    agree_to_TOS = '#cgv'
    pay_by_bank_wire = '.bankwire'
    confirm_order = '#cart_navigation > .button > span'

   
proceedToCheckout() {
    cy.get(this.proceed_to_checkout, {timeout: 10000}).click();
}
clickCheckoutButton() {
    cy.get(this.click_checkout_button).click();
}
deliveryInstructions(instructions: string) {
    cy.get(this.delivery_instructions).type(instructions);
}
clickToAgreeTOS() {
    cy.get(this.agree_to_TOS).click();
}
payByBankWire() {
    cy.get(this.pay_by_bank_wire).click();
}
clickConfirmOrder() {
    cy.get(this.confirm_order).click();
}
}