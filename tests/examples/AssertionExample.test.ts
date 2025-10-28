import test from '@lib/BaseTest';

test.describe('Assertion Manager Examples', () => {
    
    test('Demonstration of various assertion methods', async ({ page, assertionManager }) => {
        // Navigate to a test page
        await page.goto('https://demoqa.com/text-box');

        // Element visibility assertions
        await assertionManager.assertElementVisible('#userName', 'Full Name input should be visible');
        await assertionManager.assertElementVisible('#userEmail', 'Email input should be visible');
        
        // Page title assertion
        await assertionManager.assertPageTitle("DEMOQA", 'Page title should contain DEMOQA');
        
        // URL assertion
        await assertionManager.assertUrlContains('text-box', 'URL should contain text-box');
        
        // Fill form and test input values
        await page.fill('#userName', 'John Doe');
        await page.fill('#userEmail', 'john.doe@example.com');
        
        // Input value assertions
        await assertionManager.assertInputValue('#userName', 'John Doe', 'Full Name should have correct value');
        await assertionManager.assertInputValue('#userEmail', 'john.doe@example.com', 'Email should have correct value');
        
        // Element state assertions
        await assertionManager.assertElementEnabled('#submit', 'Submit button should be enabled');
        
        // Attribute assertions
        await assertionManager.assertElementHasAttribute('#userName', 'placeholder', 'Full Name');
        await assertionManager.assertElementHasAttribute('#userEmail', 'type', 'email');
        
        // Submit form and check results
        await page.click('#submit');
        
        // Check if results are displayed
        await assertionManager.assertElementVisible('#output', 'Output should be visible after form submission');
        
        // Text content assertions
        await assertionManager.assertElementContainsText('#output', 'John Doe', 'Output should contain the submitted name');
        await assertionManager.assertElementContainsText('#output', 'john.doe@example.com', 'Output should contain the submitted email');
    });

    test('Element count and multiple elements test', async ({ page, assertionManager }) => {
        await page.goto('https://demoqa.com/elements');
        
        // Count assertions
        await assertionManager.assertElementCount('.card-body', 6, 'Should have 6 element cards');
        
        // Multiple elements visibility
        const cardSelectors = [
            'text=Text Box',
            'text=Check Box', 
            'text=Radio Button',
            'text=Web Tables'
        ];
        
        await assertionManager.assertMultipleElementsVisible(cardSelectors, 'All main element cards should be visible');
    });

    test('Checkbox and radio button assertions', async ({ page, assertionManager }) => {
        await page.goto('https://demoqa.com/checkbox');
        
        // Initially unchecked
        await assertionManager.assertElementUnchecked('.rct-checkbox', 'Checkbox should be initially unchecked');
        
        // Click to check
        await page.click('.rct-checkbox');
        
        // Now should be checked
        await assertionManager.assertElementChecked('.rct-checkbox', 'Checkbox should be checked after clicking');
    });

    test('Text pattern matching', async ({ page, assertionManager }) => {
        await page.goto('https://demoqa.com/');
        
        // Text pattern matching with regex
        await assertionManager.assertElementTextMatches('h1', /Elements|Forms|Alerts|Widgets|Interactions/, 'Header should match expected pattern');
    });

    test('Wait with timeout assertions', async ({ page, assertionManager }) => {
        await page.goto('https://demoqa.com/dynamic-properties');
        
        // Element that appears after delay
        await assertionManager.assertElementAppearsWithinTimeout('#visibleAfter', 10000, 'Element should appear within 10 seconds');
        
        // Element that becomes enabled after delay  
        await assertionManager.assertElementAppearsWithinTimeout('#enableAfter', 10000, 'Button should become enabled within 10 seconds');
    });
});