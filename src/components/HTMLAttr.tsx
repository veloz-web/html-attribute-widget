import { Component, ReactNode, RefObject, createRef, createElement } from "react";

export interface HTMLAttrProps {
    name?: string;
    withContext?: boolean;
    contextValue?: string;
    targetType?: TargetType;
    targetName?: string;
}

export type TargetType = "sibling" | "parent" | "specific" | "body";

export class HTMLAttr extends Component<HTMLAttrProps> {
    private scriptRef: RefObject<HTMLScriptElement> = createRef<HTMLScriptElement>();

    render(): ReactNode {
        return <script ref={this.scriptRef}></script>;
    }

    componentDidUpdate(): void {
        if (!this.scriptRef.current) {
            return;
        }

        let target: Element = this.scriptRef.current;

        // Check if parent has mxui_widget_Wrapper in its id
        const parent: Element | null = target.parentElement;
        if (parent && parent.id && parent.id.includes("mxui_widget_Wrapper")) {
            target = parent;
        }

        if (this.props.withContext) {
            this.setAttributeWithContext(target);
        } else {
            this.setAttributeWithoutContext(target);
        }
    }

    private setAttributeWithContext(target: Element): void {
        const attributeName: string = (this.props.name || "").toLowerCase();
        const attributeValue: string = this.props.contextValue || "";

        switch (this.props.targetType) {
            case "sibling":
                const prevDiv: Element | null = this.getPreviousDiv(target);
                if (prevDiv) {
                    prevDiv.setAttribute(attributeName, attributeValue);
                }
                break;
            case "parent":
                const parent: Element | null = target.parentElement;
                if (parent) {
                    parent.setAttribute(attributeName, attributeValue);
                }
                break;
            case "specific":
                if (this.props.targetName) {
                    const specificTarget: Element | null = target.closest("." + this.props.targetName);
                    if (specificTarget) {
                        specificTarget.setAttribute(attributeName, attributeValue);
                    }
                }
                break;
            case "body":
                const body: HTMLElement | null = document.querySelector("body");
                const html: HTMLElement | null = document.querySelector("html");
                if (body) {
                    body.setAttribute(attributeName, attributeValue);
                }
                if (html) {
                    html.setAttribute(attributeName, attributeValue);
                }
                break;
            default:
                break;
        }
    }

    private setAttributeWithoutContext(target: Element): void {
        const attributeName: string = (this.props.name || "").toLowerCase();

        switch (this.props.targetType) {
            case "sibling":
                const prevSibling: Element | null = target.previousElementSibling;
                if (prevSibling) {
                    prevSibling.setAttribute(attributeName, "");
                }
                break;
            case "parent":
                const parent: Element | null = target.parentElement;
                if (parent) {
                    parent.setAttribute(attributeName, "");
                }
                break;
            case "specific":
                if (this.props.targetName) {
                    const specificTarget: Element | null = target.closest("." + this.props.targetName);
                    if (specificTarget) {
                        specificTarget.setAttribute(attributeName, "");
                    }
                }
                break;
            case "body":
                const body: HTMLElement | null = document.querySelector("body");
                const html: HTMLElement | null = document.querySelector("html");
                const attributeValue: string = this.props.contextValue || "";
                if (body) {
                    body.setAttribute(attributeName, attributeValue);
                }
                if (html) {
                    html.setAttribute(attributeName, attributeValue);
                }
                break;
            default:
                break;
        }
    }

    private getPreviousDiv(element: Element): Element | null {
        let sibling: Element | null = element.previousElementSibling;
        while (sibling) {
            if (sibling.tagName.toLowerCase() === "div") {
                return sibling;
            }
            sibling = sibling.previousElementSibling;
        }
        return null;
    }
}
