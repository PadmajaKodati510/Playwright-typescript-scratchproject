# Playwright-typescript-scratchproject
Playwright TypeScript automation framework for AutomationExercise.com - 26 UI &amp; 14 API test cases

# Playwright TypeScript Automation Exercise

Comprehensive automation framework for [AutomationExercise.com](https://automationexercise.com) using Playwright with TypeScript.

# Project Overview

- **26 UI Test Cases** - Complete UI automation coverage
- **14 API Test Cases** - Full API endpoint testing
- **Page Object Model** - Scalable and maintainable framework
- **TypeScript** - Type-safe automation code
- **Multi-browser** - Chromium, Firefox, WebKit
- **Detailed Reports** - HTML, JSON, JUnit reports

##  Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
git clone https://github.com/PadmajaKodati510/Playwright-typescript-scratchproject.git
cd Playwright-typescript-scratchproject
npm install
npx playwright install
```

### Running Tests


##  Project Structure
src/
├── tests/
│   ├── ui/               # UI test cases (26 tests)
│   └── api/              # API test cases (14 tests)
├── pages/
│   ├── basePage.ts       # Base page class
│   ├── homePage.ts       # Home page automation
│   ├── loginPage.ts      # Login/Signup automation
│   ├── productPage.ts    # Product page automation
│   ├── cartPage.ts       # Cart page automation
│   ├── checkoutPage.ts   # Checkout page automation
│   ├── paymentPage.ts    # Payment page automation
│   ├── contactUsPage.ts  # Contact Us form automation
│   └── testCasesPage.ts  # Test Cases page automation
├── utils/
│   ├── constants.ts      # URLs, selectors, test data
│   ├── helpers.ts        # Helper utilities and logger
│   └── logger.ts         # Logging utility
├── config/
│   └── testData.ts       # Test data and user credentials
└── fixtures/
    └── baseFixture.ts    # Custom Playwright fixtures
playwright.config.ts      # Playwright configuration
tsconfig.json            # TypeScript configuration
package.json             # Project dependencies

##  UI Test Cases (26 Total)

1.  Verify home page is visible successfully
2.  Verify home page title is correct
3.  Login User with correct email and password
4.  Login User with incorrect email and password
5.  Register User with existing email
6.  Contact Us Form
7.  Test Case Page visibility
8.  Verify All Products and product detail page
9.  Search Product
10.  Verify Subscription in home page
11.  Verify Subscription in Cart page
12.  Add Products in Cart
13.  Verify Product quantity in Cart
14.  Place Order: Register while Checkout
15.  Place Order: Register before Checkout
16.  Place Order: Login before Checkout
17.  Remove Products From Cart
18.  View Category Products
19.  View & Cart Brand Products
20.  Search Products and Verify Cart After Login
21.  Add Review on Product
22.  Add to cart from Recommended items
23.  Verify address details in checkout page
24.  Download Invoice after purchase order
25.  Verify Scroll Up using 'Arrow' button and Scroll Down functionality
26.  Verify Scroll Up without 'Arrow' button and Scroll Down functionality

##  API Test Cases (14 Total)

1.  GET /productsList - List all products
2.  GET /searchProduct - Search products by name
3.  POST /addToCart - Add product to cart
4.  POST /createAccount - Create new user account
5.  POST /verifyLogin - Verify user login
6.  POST /login - Login with credentials
7.  GET /userDetailByEmail - Get user details by email
8.  PUT /updateAccount - Update user account
9.  DELETE /deleteAccount - Delete user account
10.  POST /contactUs - Submit contact form
11.  GET /getOrders - Retrieve user orders
12.  POST /placeOrder - Place new order
13.  GET /brandsList - List all brands
14.  GET /getCategoryList - List all categories

## 🎯 Framework Features

 **Page Object Model (POM)** - Scalable and maintainable  
 **Type-Safe** - Full TypeScript support  
 **Custom Fixtures** - Reusable test setup  
 **Logger Utility** - Track all test execution  
 **Multi-Browser** - Chromium, Firefox, WebKit  
 **Screenshots** - On failure only  
 **Video Recording** - Retain on failure  
 **HTML Reports** - Detailed test reports  
 **Retry Logic** - Automatic retries for CI  
 **Helper Utilities** - Common test operations  

##  Commits Overview

- **Commit 1** - Initial Setup (Configuration & Base Classes)
- **Commits 2-27** - UI Test Cases (26 tests, one per commit)
- **Commits 28-41** - API Test Cases (14 tests, one per commit)

**Total: 41 commits**

## Best Practices

- Clean code following industry standards
- DRY (Don't Repeat Yourself) principle
- Proper error handling and logging
- Type safety with TypeScript
- Page Object Model pattern
- Descriptive test names
- Comprehensive assertions
- Reusable utilities and helpers

**PadmajaKodati510**
This project is open source and available under the MIT License.
**Happy Testing!**
