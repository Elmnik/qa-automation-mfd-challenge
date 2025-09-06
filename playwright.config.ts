import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  
  use: {
    trace: 'on-first-retry',
  },

  /* Configure test execution order with descriptive names */
  testMatch: [
    // Backend API Tests
    '**/getObject.test.ts',           // Test_001 - Get a single object
    '**/createObject.test.ts',        // Test_002 - Create a new object
    '**/updateObject.test.ts',        // Test_003 - Update an object
    '**/deleteObject.test.ts',        // Test_004 - Delete an object
    '**/listObjects.test.ts',         // Test_005 - List all objects
    
    // Frontend UI Tests
    '**/alert.test.ts',
    '**/radioButton.test.ts',
    '**/textbox.test.ts',
    '**/widgetsTabs.test.ts',
    '**/widgetsMenu.test.ts'
  ],

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});