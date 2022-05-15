
import '@testing-library/cypress/add-commands';
const dress = require("../fixtures/dresses");
import { createAccountPO } from "../Pages/createAccountPO";
import { headerPO } from "../Pages/headerPO";
import { homePagePO } from "../Pages/homePagePO";
import { signInPO } from "../Pages/signInPO";
import { tshirtPagePO } from "../Pages/tshirtPagePO";
import { dressPagePO } from "../Pages/dressPagePO";
import { checkoutPO } from "../Pages/checkoutPO";

const createAccount = new createAccountPO();
const header = new headerPO();
const homePage = new homePagePO();
const signIn = new signInPO();
const tshirtProductPage = new tshirtPagePO();
const dressProductPage = new dressPagePO();
const checkoutPage = new checkoutPO();

export class commands {
random() {
   return Math.floor(Math.random() * 3)    
}

navigateToURL(url: string) {
cy.visit(url);
}
navigateToSignInPage() {
homePage.clickSigninButton();   
}
navigateToDressPage() {
dressProductPage.clickDressPage();
}
enterEmailAddressAndProceedToCreateAccount(email: string){
signIn.typeEmail(email);
signIn.clickCreate();   
}
completeRegistrationFields(firstName: string, lastName: string, password: string, address: string, city: string, state: string, zipcode: string, mobile: string, alias: string) {
createAccount.clickMrRadio();
createAccount.firstNameInputField(firstName);
createAccount.lastNameInputField(lastName);
createAccount.passwordInputField(password);
createAccount.addressInputField(address);
createAccount.cityInputField(city);
createAccount.stateDropdown(state);
createAccount.zipCodeInputField(zipcode);
createAccount.mobileInputField(mobile);
createAccount.aliasInputField(alias);
createAccount.clickRegisterBtn();
}

// purchaseTshirt() {
// tshirtProductPage.clickTshirtsPage();
// tshirtProductPage.clickMore();
// tshirtProductPage.chooseSize();
// tshirtProductPage.chooseColor();
// tshirtProductPage.addToCart();
// tshirtProductPage.continueShopping();
// }


addASpecificDressToBasket(index: number,locator: string) {
cy.get("[class='price product-price']").eq(index)
dressProductPage.addToCart(locator);

// dressProductPage.clickMore();
// dressProductPage.increaseQuantityByOne();
// dressProductPage.chooseSize();
// dressProductPage.chooseColor();

}

proceedToCheckout(instructions: string) {
checkoutPage.proceedToCheckout();
checkoutPage.clickCheckoutButton();
checkoutPage.deliveryInstructions(instructions);
checkoutPage.clickCheckoutButton();
checkoutPage.clickToAgreeTOS();
checkoutPage.clickCheckoutButton();
checkoutPage.payByBankWire();
checkoutPage.clickConfirmOrder();
}


}


