import { test, expect } from "@playwright/test";
import { HomePage } from "./pages/home.page";

const homepage = new HomePage();

test.describe("HTMLAttribute Widget", () => {
    test.beforeEach(async ({ page }) => {
        homepage.setPage(page);
        await homepage.goto();
        await homepage.waitForWidgetToLoad();
    });

    test("should render the widget with script element", async () => {
        const scriptElement = homepage.scriptElement;
        await expect(scriptElement).toBeVisible();
    });

    test("should add attribute to target element", async () => {
        const targetElement = homepage.targetElement;
        await expect(targetElement).toHaveAttribute("data-custom", "value");
    });

    test("should add attribute to parent element when target type is parent", async () => {
        const parentElement = homepage.parentElement;
        await expect(parentElement).toHaveAttribute("data-parent-attr", "parent-value");
    });

    test("should add attribute to sibling element when target type is sibling", async () => {
        const siblingElement = homepage.siblingElement;
        await expect(siblingElement).toHaveAttribute("data-sibling-attr", "sibling-value");
    });
});
