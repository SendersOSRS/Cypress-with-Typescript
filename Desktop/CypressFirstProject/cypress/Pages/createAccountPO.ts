

export class createAccountPO {

  
  mr_radio = '#id_gender1'
  first_name ='#customer_firstname'
  last_name = '#customer_lastname'
  password = '#passwd'
  address1 = '#address1'
  city = '#city'
  state = '#id_state'
  zip_code = '#postcode'
  mobile = '#phone_mobile'
  alias = '#alias'
  click_register = '#submitAccount > span'
 

  clickMrRadio() {
    cy.get(this.mr_radio, { timeout: 10000 }).click();
  }
  firstNameInputField(firstName: string) {
    cy.get(this.first_name).type(firstName);
  }
  lastNameInputField(lastName: string) {
    cy.get(this.last_name).type(lastName);
  }
  passwordInputField(password: string) {
    cy.get(this.password).type(password);
  }
  addressInputField(address: string) {
    cy.get(this.address1).type(address);
  }
  cityInputField(city: string) {
    cy.get(this.city).type(city);
  }
  stateDropdown(state: string) {
    cy.get(this.state).select(state); 
  }
  zipCodeInputField(zipcode: string) {
    cy.get(this.zip_code).type(zipcode);
  }
  mobileInputField(mobile: string) {
    cy.get(this.mobile).type(mobile);
  }
  aliasInputField(alias: string) {
    cy.get(this.alias).type(alias);
  }
  clickRegisterBtn() {
    cy.get(this.click_register).click();
  }
}

