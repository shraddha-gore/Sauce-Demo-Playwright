# Overview

This project is a test automation framework developed using [Playwright](https://playwright.dev/) and JavaScript to test the SauceDemo website.

This test suite comprises two distinct test files: one dedicated to functional testing and another for visual testing.
Functional tests encompass verification of sorting order and the entire checkout flow, ensuring proper functionality.
Visual tests are executed on every page within the flow to guarantee consistent and accurate visual presentation.

The framework is designed with the **Page Object Model (POM)** to enhance scalability and maintainability. It is highly configurable, with parameterized options that allow tests to be executed across multiple browsers. Additionally, this framework employs a **data-driven approach**, eliminating the need for hardcoding data within the test scripts themselves.

Traces, screenshots, and videos are captured by default for all tests due to the framework's small scale. For reporting, the framework leverages Playwright's default **HTML reporter** for clear and comprehensive test results.

# Dependencies

To run this project, ensure the following dependencies are installed:

- **Node.js**: Required to run JavaScript code and manage packages.
- **Playwright**: Core library for browser automation and testing.

# Steps to Run the Project

Follow these steps to set up and execute the tests:

1. **Install [Node.js](https://nodejs.org/en/download/package-manager)** on your machine if it is not already installed.
2. **Clone the repository** using your terminal:

```
git clone https://github.com/shraddha-gore/Sauce-Demo-Playwright.git
```

3. **Navigate to the project directory**:

```
cd Sauce-Demo-Playwright
```

4. **Install the required dependencies**:

```
npm install
```

5. **[IMP] Capture and update snapshots of pages for visual testing for the first run.**

```
npx playwright test -- update-snapshots
```

6. **Execute tests across all projects.**

```
npx playwright test
```

7. **Execute functional tests across all projects.**

```
npx playwright test functional-tests
```

8. **Execute visual tests across all projects.**

```
npx playwright test visual-tests
```

9. **Execute tests for a specific project.** Available projects: `chromium`, `firefox`, `webkit`.

```
npx playwright test --project chromium --project firefox
```

10. **Execute tests in headed mode.** The tests run in headless mode by default.

```
npx playwright test --headed
```

11. **View Playwright reports.**

```
npx playwright show-report
```

# Test Results

A video recording of the test execution of a previous test report is available for reference.

https://github.com/user-attachments/assets/ba68f56a-6cfc-4866-a6cc-23828a573ba0

