import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('HTML Attribute Widget', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goto();
        await homePage.waitForWidgetToLoad();
    });

    test('should render the widget with script element', async () => {
        await expect(homePage.scriptElement).toBeVisible();
    });

    test('should add attribute to target element', async () => {
        const dataCustom: string | null = await homePage.targetElement.getAttribute('data-custom');
        expect(dataCustom).toBe('value');
    });

    test('should add attribute to parent element when target type is parent', async () => {
        const dataParentAttr: string | null = await homePage.parentElement.getAttribute('data-parent-attr');
        expect(dataParentAttr).toBe('parent-value');
    });

    test('should add attribute to sibling element when target type is sibling', async () => {
        const dataSiblingAttr: string | null = await homePage.siblingElement.getAttribute('data-sibling-attr');
        expect(dataSiblingAttr).toBe('sibling-value');
    });
});
