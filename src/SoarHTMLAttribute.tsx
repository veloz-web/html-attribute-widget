import { ReactElement, ComponentProps, createElement } from "react";
import { HTMLAttr, TargetType } from "./components/HTMLAttr";

export interface SoarHTMLAttributeContainerProps extends ComponentProps<"div"> {
    selectorName: string | undefined;
    context: boolean | undefined;
    contextAttribute: any;
    elemSelector: TargetType | undefined;
    specificElement: string | undefined;
    name: string;
    tabIndex?: number;
    id: string;
    // Replace {} with object or Record<string, unknown>
    someProperty: object; // or Record<string, unknown>
}

// Add return type to your function on line 6
export function SoarHTMLAttribute(props: SoarHTMLAttributeContainerProps): ReactElement {
    return (
        <HTMLAttr
            name={props.selectorName}
            withContext={props.context}
            contextValue={props.contextAttribute ? props.contextAttribute.displayValue : ""}
            targetType={props.elemSelector}
            targetName={props.specificElement}
        ></HTMLAttr>
    );
}
