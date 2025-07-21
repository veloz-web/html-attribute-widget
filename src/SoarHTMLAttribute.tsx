import { Component, createElement } from "react";
import { HTMLAttr } from "./components/HTMLAttr";
import { SoarHTMLAttributeContainerProps } from "../typings/SoarHTMLAttributeProps";

class SoarHTMLAttribute extends Component<SoarHTMLAttributeContainerProps, {}> {
    render() {
        return (
            <HTMLAttr
                name={this.props.selectorName}
                withContext={this.props.context}
                contextValue={this.props.contextAttribute ? this.props.contextAttribute.displayValue : ""}
                targetType={this.props.elemSelector}
                targetName={this.props.specificElement}
            ></HTMLAttr>
        );
    }
}

export default SoarHTMLAttribute;
