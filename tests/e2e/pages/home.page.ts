import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly htmlAttributeWidget: Locator;
    readonly scriptElement: Locator;
    readonly targetElement: Locator;
    readonly parentElement: Locator;
    readonly siblingElement: Locator;

    constructor(private page: Page) {
        this.htmlAttributeWidget = page.locator('.qvine-soarhtmlattribute');
        this.scriptElement = page.locator('script[data-testid="html-attr-script"]');
        this.targetElement = page.locator('#targetElement');
        this.parentElement = page.locator('.parent-element');
        this.siblingElement = page.locator('.sibling-element');
    }

    async goto() {
        await this.page.goto('/');
    }

    async waitForWidgetToLoad() {
        await this.htmlAttributeWidget.waitFor({ state: 'visible' });
    }
}
