import { createElement, ReactElement } from "react";

import { HTMLAttr } from "./components/HTMLAttr";
import { SoarHTMLAttributeContainerProps } from "../typings/SoarHTMLAttributeProps";

export function SoarHTMLAttribute(props: SoarHTMLAttributeContainerProps): ReactElement {
    return (
        <HTMLAttr
            name={props.selectorName}
            withContext={props.context}
            contextValue={props.contextAttribute ? props.contextAttribute.displayValue : ""}
            targetType={props.elemSelector}
            targetName={props.specificElement}
        />
    );
}

export default SoarHTMLAttribute;
