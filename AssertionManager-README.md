# AssertionManager Documentation

The `AssertionManager` class provides a comprehensive set of assertion methods for Playwright test automation. It's designed to make your test assertions more readable, maintainable, and consistent across your test suite.

## Installation and Setup

The `AssertionManager` is already integrated into the `BaseTest.ts` file and available as a fixture in all your tests.

```typescript
import test from '@lib/BaseTest';

test('Your test name', async ({ page, assertionManager }) => {
    // Use assertionManager methods here
});
```

## Categories of Assertions

### 1. Element Visibility Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertElementVisible` | Verify element is visible | `await assertionManager.assertElementVisible('#button', 'Button should be visible')` |
| `assertElementHidden` | Verify element is hidden | `await assertionManager.assertElementHidden('#popup', 'Popup should be hidden')` |
| `assertElementAttached` | Verify element is in DOM | `await assertionManager.assertElementAttached('#content')` |
| `assertElementDetached` | Verify element is not in DOM | `await assertionManager.assertElementDetached('#removed-element')` |

### 2. Element State Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertElementEnabled` | Verify element is enabled | `await assertionManager.assertElementEnabled('#submit')` |
| `assertElementDisabled` | Verify element is disabled | `await assertionManager.assertElementDisabled('#loading-button')` |
| `assertElementChecked` | Verify checkbox/radio is checked | `await assertionManager.assertElementChecked('#agreement')` |
| `assertElementUnchecked` | Verify checkbox/radio is unchecked | `await assertionManager.assertElementUnchecked('#optional')` |
| `assertElementFocused` | Verify element has focus | `await assertionManager.assertElementFocused('#username')` |
| `assertElementEditable` | Verify element is editable | `await assertionManager.assertElementEditable('#textarea')` |

### 3. Text Content Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertElementContainsText` | Verify element contains text | `await assertionManager.assertElementContainsText('#message', 'Success')` |
| `assertElementHasText` | Verify element has exact text | `await assertionManager.assertElementHasText('#title', 'Welcome')` |
| `assertElementNotContainText` | Verify element doesn't contain text | `await assertionManager.assertElementNotContainText('#error', 'Failed')` |
| `assertElementTextMatches` | Verify text matches regex | `await assertionManager.assertElementTextMatches('#phone', /\\d{3}-\\d{3}-\\d{4}/)` |
| `assertPageContainsText` | Verify page contains text | `await assertionManager.assertPageContainsText('Login')` |

### 4. Input Value Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertInputValue` | Verify input has specific value | `await assertionManager.assertInputValue('#email', 'user@example.com')` |
| `assertInputNotValue` | Verify input doesn't have value | `await assertionManager.assertInputNotValue('#password', '')` |
| `assertInputValueMatches` | Verify value matches regex | `await assertionManager.assertInputValueMatches('#zip', /\\d{5}/)` |
| `assertInputEmpty` | Verify input is empty | `await assertionManager.assertInputEmpty('#search')` |

### 5. Attribute Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertElementHasAttribute` | Verify element has attribute | `await assertionManager.assertElementHasAttribute('#link', 'href', 'https://example.com')` |
| `assertElementNotHasAttribute` | Verify element doesn't have attribute | `await assertionManager.assertElementNotHasAttribute('#button', 'disabled')` |
| `assertElementHasClass` | Verify element has CSS class | `await assertionManager.assertElementHasClass('#alert', 'error')` |
| `assertElementNotHasClass` | Verify element doesn't have class | `await assertionManager.assertElementNotHasClass('#button', 'disabled')` |
| `assertElementHasCSS` | Verify CSS property value | `await assertionManager.assertElementHasCSS('#text', 'color', 'rgb(255, 0, 0)')` |

### 6. Page-Level Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertPageTitle` | Verify page title | `await assertionManager.assertPageTitle('Dashboard')` |
| `assertUrlContains` | Verify URL contains text | `await assertionManager.assertUrlContains('/dashboard')` |
| `assertUrl` | Verify exact URL | `await assertionManager.assertUrl('https://example.com/login')` |
| `assertUrlNotContains` | Verify URL doesn't contain text | `await assertionManager.assertUrlNotContains('/admin')` |

### 7. Count Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertElementCount` | Verify element count | `await assertionManager.assertElementCount('.item', 5)` |
| `assertElementCountGreaterThan` | Verify count is greater than | `await assertionManager.assertElementCountGreaterThan('.product', 0)` |
| `assertElementCountLessThan` | Verify count is less than | `await assertionManager.assertElementCountLessThan('.error', 1)` |

### 8. Wait and Timeout Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertElementAppearsWithinTimeout` | Wait for element to appear | `await assertionManager.assertElementAppearsWithinTimeout('#loader', 10000)` |
| `assertElementDisappearsWithinTimeout` | Wait for element to disappear | `await assertionManager.assertElementDisappearsWithinTimeout('#loading', 5000)` |

### 9. Visual Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertElementScreenshot` | Compare element screenshot | `await assertionManager.assertElementScreenshot('#chart', 'chart.png')` |
| `assertPageScreenshot` | Compare page screenshot | `await assertionManager.assertPageScreenshot('homepage.png')` |

### 10. Custom Helper Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertSelectValue` | Verify dropdown selection | `await assertionManager.assertSelectValue('#country', 'US')` |
| `assertTableContainsData` | Verify table cell data | `await assertionManager.assertTableContainsData('#data-table', 0, 1, 'John')` |
| `assertAlertPresent` | Verify alert with text | `await assertionManager.assertAlertPresent('Confirm deletion')` |
| `assertPlaceholderText` | Verify placeholder text | `await assertionManager.assertPlaceholderText('#search', 'Enter keywords')` |
| `assertMultipleElementsVisible` | Verify multiple elements visible | `await assertionManager.assertMultipleElementsVisible(['#header', '#footer'])` |
| `assertValidationError` | Verify form validation error | `await assertionManager.assertValidationError('#email-error', 'Invalid email')` |
| `assertElementContainsAllTexts` | Verify element contains all texts | `await assertionManager.assertElementContainsAllTexts('#summary', ['Total', 'Tax', 'Shipping'])` |
| `assertElementNotContainAnyTexts` | Verify element doesn't contain texts | `await assertionManager.assertElementNotContainAnyTexts('#success', ['Error', 'Failed'])` |

### 11. API Response Assertions

| Method | Description | Example |
|--------|-------------|---------|
| `assertResponseStatus` | Verify API response status | `await assertionManager.assertResponseStatus(response, 200)` |
| `assertResponseContains` | Verify response contains data | `await assertionManager.assertResponseContains(response, { success: true })` |
| `assertResponseHeader` | Verify response header | `await assertionManager.assertResponseHeader(response, 'content-type', 'application/json')` |

## Usage Examples

### Basic Element Assertions
```typescript
test('Login form validation', async ({ page, assertionManager }) => {
    await page.goto('/login');
    
    // Verify form elements are visible
    await assertionManager.assertElementVisible('#username');
    await assertionManager.assertElementVisible('#password');
    await assertionManager.assertElementVisible('#login-button');
    
    // Verify initial state
    await assertionManager.assertInputEmpty('#username');
    await assertionManager.assertInputEmpty('#password');
    await assertionManager.assertElementEnabled('#login-button');
});
```

### Form Submission Testing
```typescript
test('User registration', async ({ page, assertionManager }) => {
    await page.goto('/register');
    
    // Fill form
    await page.fill('#email', 'test@example.com');
    await page.fill('#password', 'SecurePass123');
    await page.check('#terms');
    
    // Verify form values
    await assertionManager.assertInputValue('#email', 'test@example.com');
    await assertionManager.assertElementChecked('#terms');
    
    // Submit and verify success
    await page.click('#register-button');
    await assertionManager.assertElementVisible('#success-message');
    await assertionManager.assertElementContainsText('#success-message', 'Registration successful');
});
```

### Dynamic Content Testing
```typescript
test('Dynamic loading', async ({ page, assertionManager }) => {
    await page.goto('/dynamic-content');
    
    // Click load button
    await page.click('#load-data');
    
    // Wait for content to appear
    await assertionManager.assertElementAppearsWithinTimeout('#data-container', 10000);
    await assertionManager.assertElementCountGreaterThan('.data-item', 0);
});
```

### API Testing Integration
```typescript
test('API response validation', async ({ page, assertionManager, request }) => {
    const response = await request.get('/api/users/1');
    
    await assertionManager.assertResponseStatus(response, 200);
    await assertionManager.assertResponseHeader(response, 'content-type', 'application/json');
    await assertionManager.assertResponseContains(response, { id: 1, name: 'John Doe' });
});
```

## Best Practices

1. **Always provide meaningful messages**: Use the optional message parameter to make test failures more informative.

2. **Use appropriate assertion methods**: Choose the most specific assertion for your use case.

3. **Combine assertions logically**: Group related assertions together.

4. **Handle timing issues**: Use timeout-based assertions for dynamic content.

5. **Keep assertions focused**: Each assertion should verify one specific aspect.

## Error Handling

All assertion methods will throw descriptive errors when assertions fail, making it easy to identify what went wrong in your tests.

```typescript
// Good: Descriptive message
await assertionManager.assertElementVisible('#submit-button', 'Submit button should be visible after form validation');

// Better: The assertion will show exactly what failed
```

## Contributing

When adding new assertion methods:
1. Follow the existing naming convention
2. Include proper TypeScript types
3. Add comprehensive JSDoc comments
4. Provide usage examples
5. Include error handling with meaningful messages