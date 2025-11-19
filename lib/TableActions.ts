import { Locator, Page } from "@playwright/test";

export class TableActions {
    
    private tableLocator: Locator;
    private page: Page;

    constructor(tableLocator: Locator,page:Page) {
        this.tableLocator = tableLocator;
        this.page = page;
    }
    
    async getRowCount(): Promise<number> {
        // Implementation to get row count
        return 0;
    }
}