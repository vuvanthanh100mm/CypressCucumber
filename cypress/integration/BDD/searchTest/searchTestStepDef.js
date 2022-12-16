import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps"; 

Given("We visit google website", function(){ 
cy.visit("https://www.google.com.vn/")
})

When("We search with keyword",()=>{
    cy.get("input[name='q']").type("Behavior Driven").type("{enter}")
})

Then("assert",()=>{
    cy.url().should("include","Behavior+Driven")
})
