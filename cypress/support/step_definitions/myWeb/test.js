/// <reference types="Cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { HomePage } from "../../../pages/homePage.po.js";

const homePage = new HomePage();

Given("go to homepage", () => {
    cy.log('Test variable User')
    cy.log('Env Variable'), Cypress.env("passwordDE")
    homePage.visit();
})


When('login as {word}', (user) => {
    cy.log('Log in', user)
    })
    
Then('user is logged in', () => {
    cy.log('User is really logged in.')
    })
        
