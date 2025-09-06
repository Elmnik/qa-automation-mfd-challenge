# Automation MFD Challenge

This project contains an automated testing suite using Playwright & TypeScript for both backend (API) and frontend (UI) testing.

## 📋 Project Description

The project includes 10 test cases splited into two categories

### 🔧 Backend API Tests (5 cases)
Using **https://restful-api.dev/** as the API testing endpoint:
- `Test_001` - Get a single object
- `Test_002` - Create a new object  
- `Test_003` - Update an object
- `Test_004` - Delete an object
- `Test_005` - List all objects

### 🎨 Frontend UI Tests (5 cases)
Using **https://demoqa.com/** as the UI testing site https://github.com/byKosta/DemoQATest:
- `Test_006` - Alert handling
- `Test_007` - Radio button interactions
- `Test_008` - Textbox functionality
- `Test_009` - Widgets Tabs functionality
- `Test_010` - Widgets Menu navigation

## ⚙️ Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone qa-automation-mfd-challenge
   cd qa-automation-mfd-challenge

2. **Dependencies & Run**

Npm install or yarn install

npx playwright install

npx playwright test (Run Without Browser)

npx playwright test --headed (Run with Visible Browser)

---

### Issues Found and Solutions

- Backend API Issues:
✅ All API test cases worked correctly

✅ https://restful-api.dev/ endpoint responded properly

- Frontend UI Issues:
1. Hover issues in Safari:

2. Menu hover interactions failed in WebKit/Safari (Bug reported on file)

Solution: Implemented retry logic and TypeScript click fallbacks

- Progress bar timeouts:

1. Timeouts were too short for progress bar completion (Bug reported on file)

Solution: Increased timeout to 60 seconds and improved polling

- Inconsistent selectors:

1. Some CSS selectors varied between browsers

Solution: Implemented more robust selectors and visibility checks

- Execution order:

1. Tests were running in random order

Solution: Configured testMatch in playwright.config.ts for specific order


###  Configuration
The playwright.config.ts file is configured to:

1- Run tests in 3 browsers: Chromium, Firefox, WebKit

2- Generate HTML reports

3- Retry failed tests on CI environments

4- Capture traces on first retry

5- Run tests in parallel (except on CI)

###  Technical Stack

- Testing Framework: Playwright

- Languages: TypeScript, JavaScript

- API Testing: RESTful API Dev

- UI Testing: DemoQA

- Browsers: Chromium, Firefox, WebKit

- Reporters: HTML, Line, List

---

📄 License

This project is for educational and testing purposes.
