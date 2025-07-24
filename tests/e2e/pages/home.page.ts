import { Page, Locator } from "@playwright/test";

export class HomePage {
    htmlAttributeWidget: Locator;
    scriptElement: Locator;
    targetElement: Locator;
    parentElement: Locator;
    siblingElement: Locator;

    constructor(private page: Page) {
        this.htmlAttributeWidget = page.locator(".qvine-soarhtmlattribute");
        this.scriptElement = page.locator('script[data-testid="html-attr-script"]');
        this.targetElement = page.locator("#targetElement");
        this.parentElement = page.locator(".parent-element");
        this.siblingElement = page.locator(".sibling-element");
    }

    async goto() {
        await this.page.goto("/");
    }

    async waitForWidgetToLoad() {
        await this.htmlAttributeWidget.waitFor({ state: "visible" });
    }

    setPage(page: Page) {
        this.page = page;
        this.htmlAttributeWidget = page.locator(".qvine-soarhtmlattribute");
        this.scriptElement = page.locator('script[data-testid="html-attr-script"]');
        this.targetElement = page.locator("#targetElement");
        this.parentElement = page.locator(".parent-element");
        this.siblingElement = page.locator(".sibling-element");
    }
}
