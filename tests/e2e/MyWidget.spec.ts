import { browser } from "@wdio/globals";
import homepage from "./pages/home.page";

describe("HTMLAttribute Widget", () => {
    beforeEach(async () => {
        await homepage.open();
        await homepage.waitForWidgetToLoad();
    });

    it("should render the widget with script element", async () => {
        const scriptElement = await homepage.scriptElement;
        expect(await scriptElement.isExisting()).toBe(true);
    });

    it("should add attribute to target element", async () => {
        const targetElement = await homepage.targetElement;
        expect(await targetElement.getAttribute("data-custom")).toBe("value");
    });

    it("should add attribute to parent element when target type is parent", async () => {
        const parentElement = await homepage.parentElement;
        expect(await parentElement.getAttribute("data-parent-attr")).toBe("parent-value");
    });

    it("should add attribute to sibling element when target type is sibling", async () => {
        const siblingElement = await homepage.siblingElement;
        expect(await siblingElement.getAttribute("data-sibling-attr")).toBe("sibling-value");
    });
});
