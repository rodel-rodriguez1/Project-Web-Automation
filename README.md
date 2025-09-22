# 🧪 Cypress QA Project – Automated Testing on *The Internet by Heroku*

The purpose of this project is to showcase a **complete QA automation workflow** suitable for a real-world quality assurance role.

## 📝 Test Plan
The scope of this project focuses on validating critical functionalities of *The Internet by Heroku* demo site. Functional testing covers the login page with both valid and invalid credentials, ensuring correct navigation to protected areas on success and error messages on failure. Navigation workflows are tested by opening the “Commands” dropdown and verifying that selecting “Navigation” leads to a URL containing `/commands/navigation` and displays the expected page content. API testing validates backend communication by sending requests to endpoints such as `/status_codes/200` and confirming correct responses. Performance testing involves checking that critical pages, such as the homepage, load within an acceptable response time (under two seconds). Accessibility testing scans the homepage using the `cypress-axe` plugin to detect issues such as poor color contrast, missing HTML landmarks, and ARIA region problems. Debugging is intentionally built into the plan by writing failing tests (e.g., using an incorrect selector) and then demonstrating the debugging workflow with Cypress snapshots, `cy.debug()`, and corrected selectors. Collectively, these test cases ensure coverage across usability, reliability, accessibility, and developer-debugging readiness.

---

## ✅ Functional Test Example
```javascript
describe('Login Tests', () => {
  it('Logs in with valid credentials', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/secure');
    cy.contains('You logged into a secure area!').should('be.visible');
  });
});
```

---

## 📡 API Test Example
```javascript
describe('API Status Code Test', () => {
  it('Verifies /status/200 returns success', () => {
    cy.request('https://the-internet.herokuapp.com/status_codes/200')
      .its('status')
      .should('eq', 200);
  });
});
```

---

## 🐞 Debugging Example

**Failing Test (Intentional):**
```javascript
describe('Debugging Example - Wrong Selector', () => {
  it('Fails intentionally with incorrect locator', () => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.get('#wrong-username') // ❌ does not exist
      .debug()
      .type('tomsmith');
  });
});
```

🛠 **Debugging Process**  
- Cypress shows: *“Expected element not found: #wrong-username”*.  
- Using `.debug()` and Cypress Runner DOM snapshots, I observed the correct selector should be `#username`.  
- Corrected test → passed successfully.  

---

## ⚡ Performance Test
```javascript
describe('Performance Test', () => {
  it('Should load homepage within 2 seconds', () => {
    const start = Date.now();
    cy.visit('https://the-internet.herokuapp.com');
    const end = Date.now();
    expect(end - start).to.be.lessThan(2000);
  });
});
```

---

## ♿ Accessibility Test
Implemented using **axe-core** + `cypress-axe`:  
```javascript
import 'cypress-axe';

describe('Accessibility Test', () => {
  it('Scans homepage for violations', () => {
    cy.visit('https://the-internet.herokuapp.com');
    cy.injectAxe();
    cy.checkA11y(null, null, (violations) => {
      cy.task('log', `${violations.length} accessibility violations found`);
      cy.task('table', violations);
    }, { skipFailures: true });
  });
});
```

📊 **Results:**  
- 44 **color contrast** issues  
- 1 missing **landmark region**  
- 5 **region role** issues  

➡️ These are real accessibility problems in the demo app, captured successfully with Cypress.

## 💡 Tests
- Cypress offers a **complete test framework** beyond UI automation.  
- Integrated API + Accessibility + Performance capabilities make it ideal for modern QA pipelines.  
- Debugging tools (`.debug()`, Runner snapshots) simplify test maintenance.  
- Accessibility testing with axe uncovers **real-world WCAG violations**.  
- Documenting both **success and failure** is vital in professional QA practice.  

# ✅ Conclusion
This project demonstrates complete QA coverage using Cypress on a real demo application. It includes **functional, API, performance, debugging, and accessibility testing**, along with clear documentation and a video demo. The combination of automation breadth and structured test plan highlights Cypress as a versatile tool for end-to-end quality assurance engineering.
