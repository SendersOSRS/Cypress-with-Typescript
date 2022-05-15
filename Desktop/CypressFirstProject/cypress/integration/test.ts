
import { commands } from "../support/commands";
const user = require("../fixtures/signUpInfo");
const dress = require("../fixtures/dresses");

const demo = new commands();



//Change .createEmail('xxxxxxxxx) to create a new account


  context ('Demo Test', () => {
    beforeEach (() => {
      demo.navigateToURL("http://automationpractice.com/index.php")
      it('to make sure it has Correctly rendered the demo website link', () => {
        cy.findByText('Automation Practice Website').should('exist')
      })
    })

it("Purchase a specific Dress", () => {
  demo.navigateToSignInPage();
  demo.enterEmailAddressAndProceedToCreateAccount("tsvb34sdssdfdfdfdfdhdf@hotmail4f.com");
  const x = demo.random();
  demo.completeRegistrationFields(
    user[x].first_name,
    user[x].last_name,
    user[x].password,
    user[x].address,
    user[x].city,
    user[x].state,
    user[x].zip_code,
    user[x].mobile_phone,
    user[x].alias
  );
  demo.navigateToDressPage();
  demo.addASpecificDressToBasket(0, dress[0].locator);
  demo.proceedToCheckout('Leave parcel behind gate, if no one answers the door.');
});
})