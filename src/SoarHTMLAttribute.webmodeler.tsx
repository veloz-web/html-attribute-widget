import { Component, ReactNode, createElement } from "react";
import { HTMLAttr, HTMLAttrProps } from "./components/HTMLAttr";
import { SoarHTMLAttributePreviewProps } from "../typings/SoarHTMLAttributeProps";

export class preview extends Component<SoarHTMLAttributePreviewProps> {
    render(): ReactNode {
        return (
            <div ref={this.parentInline}>
                <HTMLAttr {...this.transformProps(this.props)}></HTMLAttr>
            </div>
        );
    }

    private parentInline(node?: HTMLElement | null): void {
        // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
        if (node && node.parentElement && node.parentElement.parentElement) {
            node.parentElement.parentElement.style.display = "inline-block";
        }
    }

    private transformProps(props: SoarHTMLAttributePreviewProps): HTMLAttrProps {
        return {
            name: props.selectorName,
            withContext: props.context,
            contextValue: props.contextAttribute,
            targetType: props.elemSelector,
            targetName: props.specificElement
        };
    }
}
