import test, { Page, Locator, expect } from '@playwright/test';
import { BrowserContext } from '@playwright/test';

export class AssertionManager {
    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
    }

    // ===========================
    // Element Visibility Assertions
    // ===========================

    /**
     * Assert that an element is visible on the page
     */
    async assertElementVisible(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeVisible();
    }

    /**
     * Assert that an element is hidden/not visible on the page
     */
    async assertElementHidden(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeHidden();
    }

    /**
     * Assert that an element is attached to the DOM
     */
    async assertElementAttached(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeAttached();
    }

    /**
     * Assert that an element is detached from the DOM
     */
    async assertElementDetached(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).not.toBeAttached();
    }

    // ===========================
    // Element State Assertions
    // ===========================

    /**
     * Assert that an element is enabled
     */
    async assertElementEnabled(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeEnabled();
    }

    /**
     * Assert that an element is disabled
     */
    async assertElementDisabled(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeDisabled();
    }

    /**
     * Assert that a checkbox or radio button is checked
     */
    async assertElementChecked(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeChecked();
    }

    /**
     * Assert that a checkbox or radio button is not checked
     */
    async assertElementUnchecked(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).not.toBeChecked();
    }

    /**
     * Assert that an element is focused
     */
    async assertElementFocused(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeFocused();
    }

    /**
     * Assert that an element is editable
     */
    async assertElementEditable(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeEditable();
    }

    // ===========================
    // Text Content Assertions
    // ===========================

    /**
     * Assert that an element contains specific text
     */
    async assertElementContainsText(locator: string | Locator, expectedText: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toContainText(expectedText);
    }

    /**
     * Assert that an element has exact text
     */
    async assertElementHasText(locator: string | Locator, expectedText: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toHaveText(expectedText);
    }

    /**
     * Assert that an element does not contain specific text
     */
    async assertElementNotContainText(locator: string | Locator, unexpectedText: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).not.toContainText(unexpectedText);
    }

    /**
     * Assert that an element's text matches a regex pattern
     */
    async assertElementTextMatches(locator: string | Locator, pattern: RegExp, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toHaveText(pattern);
    }

    // ===========================
    // Input Value Assertions
    // ===========================

    /**
     * Assert that an input element has a specific value
     */
    async assertInputValue(locator: string | Locator, expectedValue: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toHaveValue(expectedValue);
    }

    /*** Assert that an input element does not have a specific value
     */
    async assertInputNotValue(locator: string | Locator, unexpectedValue: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).not.toHaveValue(unexpectedValue);
    }

    /**
     * Assert that an input element's value matches a regex pattern
     */
    async assertInputValueMatches(locator: string | Locator, pattern: RegExp, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toHaveValue(pattern);
    }

    /**
     * Assert that an input element is empty
     */
    async assertInputEmpty(locator: string | Locator, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toHaveValue('');
    }

    // ===========================
    // Attribute Assertions
    // ===========================

    /**
     * Assert that an element has a specific attribute
     */
    async assertElementHasAttribute(locator: string | Locator, attributeName: string, expectedValue?: string | RegExp, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        if (expectedValue !== undefined) {
            await expect(element, message).toHaveAttribute(attributeName, expectedValue);
        } else {
            await expect(element, message).toHaveAttribute(attributeName);
        }
    }

    /**
     * Assert that an element does not have a specific attribute
     */
    async assertElementNotHasAttribute(locator: string | Locator, attributeName: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).not.toHaveAttribute(attributeName);
    }

    /**
     * Assert that an element has a specific CSS class
     */
    async assertElementHasClass(locator: string | Locator, className: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toHaveClass(new RegExp(className));
    }

    /**
     * Assert that an element does not have a specific CSS class
     */
    async assertElementNotHasClass(locator: string | Locator, className: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).not.toHaveClass(new RegExp(className));
    }

    /**
     * Assert that an element has a specific CSS property
     */
    async assertElementHasCSS(locator: string | Locator, propertyName: string, expectedValue: string | RegExp, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toHaveCSS(propertyName, expectedValue);
    }

    // ===========================
    // Page-Level Assertions
    // ===========================

    /**
     * Assert that the page has a specific title
     */
    async assertPageTitle(expectedTitle: string | RegExp, message?: string): Promise<void> {
        await expect(this.page, message).toHaveTitle(expectedTitle);
    }

    /**
     * Assert that the page URL contains specific text
     */
    async assertUrlContains(expectedUrlPart: string, message?: string): Promise<void> {
        await expect(this.page, message).toHaveURL(new RegExp(expectedUrlPart));
    }

    /**
     * Assert that the page URL matches exactly
     */
    async assertUrl(expectedUrl: string | RegExp, message?: string): Promise<void> {
        await expect(this.page, message).toHaveURL(expectedUrl);
    }

    /**
     * Assert that the page URL does not contain specific text
     */
    async assertUrlNotContains(unexpectedUrlPart: string, message?: string): Promise<void> {
        await expect(this.page, message).not.toHaveURL(new RegExp(unexpectedUrlPart));
    }

    // ===========================
    // Count Assertions
    // ===========================

    /**
     * Assert that a locator matches a specific number of elements
     */
    async assertElementCount(locator: string | Locator, expectedCount: number, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toHaveCount(expectedCount);
    }

    /**
     * Assert that a locator matches at least a minimum number of elements
     */
    async assertElementCountGreaterThan(locator: string | Locator, minCount: number, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        const actualCount = await element.count();
        expect(actualCount, message || `Expected element count to be greater than ${minCount}, but got ${actualCount}`).toBeGreaterThan(minCount);
    }

    /**
     * Assert that a locator matches fewer than a maximum number of elements
     */
    async assertElementCountLessThan(locator: string | Locator, maxCount: number, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        const actualCount = await element.count();
        expect(actualCount, message || `Expected element count to be less than ${maxCount}, but got ${actualCount}`).toBeLessThan(maxCount);
    }

    // ===========================
    // Wait and Timeout Assertions
    // ===========================

    /**
     * Assert that an element appears within a timeout
     */
    async assertElementAppearsWithinTimeout(locator: string | Locator, timeout: number = 30000, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeVisible({ timeout });
    }

    /**
     * Assert that an element disappears within a timeout
     */
    async assertElementDisappearsWithinTimeout(locator: string | Locator, timeout: number = 30000, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeHidden({ timeout });
    }

    // ===========================
    // Screenshot Assertions
    // ===========================

    /**
     * Assert that an element matches a visual screenshot
     */
    async assertElementScreenshot(locator: string | Locator, screenshotName: string, options?: any, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toHaveScreenshot(screenshotName, options);
    }

    /**
     * Assert that the full page matches a visual screenshot
     */
    async assertPageScreenshot(screenshotName: string, options?: any, message?: string): Promise<void> {
        await expect(this.page, message).toHaveScreenshot(screenshotName, options);
    }

    // ===========================
    // Custom Assertion Helpers
    // ===========================

    /**
     * Assert that a select dropdown has a specific selected option
     */
    async assertSelectValue(locator: string | Locator, expectedValue: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        const selectedValue = await element.inputValue();
        expect(selectedValue, message || `Expected select value to be "${expectedValue}", but got "${selectedValue}"`).toBe(expectedValue);
    }

    /**
     * Assert that a table contains specific data
     */
    async assertTableContainsData(tableLocator: string | Locator, rowIndex: number, columnIndex: number, expectedData: string, message?: string): Promise<void> {
        const table = typeof tableLocator === 'string' ? this.page.locator(tableLocator) : tableLocator;
        const cell = table.locator(`tr:nth-child(${rowIndex + 1}) td:nth-child(${columnIndex + 1})`);
        await expect(cell, message).toContainText(expectedData);
    }

    /**
     * Assert that an alert is present with specific text
     */
    async assertAlertPresent(expectedText?: string): Promise<void> {
        this.page.on('dialog', async dialog => {
            if (expectedText) {
                expect(dialog.message()).toContain(expectedText);
            }
            await dialog.accept();
        });
    }

    /**
     * Assert that an element has a specific placeholder text
     */
    async assertPlaceholderText(locator: string | Locator, expectedPlaceholder: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toHaveAttribute('placeholder', expectedPlaceholder);
    }

    /**
     * Assert that multiple elements are visible
     */
    async assertMultipleElementsVisible(locators: (string | Locator)[], message?: string): Promise<void> {
        for (const locator of locators) {
            await this.assertElementVisible(locator, message);
        }
    }

    /**
     * Assert that form validation error is displayed
     */
    async assertValidationError(locator: string | Locator, expectedErrorMessage: string, message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        await expect(element, message).toBeVisible();
        await expect(element, message).toContainText(expectedErrorMessage);
    }

    /**
     * Assert that element contains all expected text values
     */
    async assertElementContainsAllTexts(locator: string | Locator, expectedTexts: string[], message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        for (const text of expectedTexts) {
            await expect(element, message).toContainText(text);
        }
    }

    /**
     * Assert that element does not contain any of the unexpected text values
     */
    async assertElementNotContainAnyTexts(locator: string | Locator, unexpectedTexts: string[], message?: string): Promise<void> {
        const element = typeof locator === 'string' ? this.page.locator(locator) : locator;
        for (const text of unexpectedTexts) {
            await expect(element, message).not.toContainText(text);
        }
    }

    // ===========================
    // API Response Assertions (for API testing integration)
    // ===========================

    /**
     * Assert API response status
     */
    async assertResponseStatus(response: any, expectedStatus: number, message?: string): Promise<void> {
        expect(response.status(), message || `Expected status ${expectedStatus}, but got ${response.status()}`).toBe(expectedStatus);
    }

    /**
     * Assert API response contains specific data
     */
    async assertResponseContains(response: any, expectedData: any, message?: string): Promise<void> {
        const responseData = await response.json();
        expect(responseData, message).toMatchObject(expectedData);
    }

    /**
     * Assert API response header
     */
    async assertResponseHeader(response: any, headerName: string, expectedValue: string, message?: string): Promise<void> {
        const headerValue = response.headers()[headerName.toLowerCase()];
        expect(headerValue, message || `Expected header ${headerName} to be ${expectedValue}, but got ${headerValue}`).toBe(expectedValue);
    }

    async takeScreenshot(snapshotName: string, options ?: { fullPage ?: boolean }): Promise<void> { 
        const path = `screenshots/${snapshotName}_${Date.now()}.png`;
        const screenprint = await this.page.screenshot({ path, fullPage: options ?. fullPage || false });
        await test.info().attach(snapshotName, { body: screenprint, contentType: 'image/png' });
    }
}