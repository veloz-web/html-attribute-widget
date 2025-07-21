/**
 * This file was generated from SoarHTMLAttribute.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";
import { Big } from "big.js";

export type ElemSelectorEnum = "sibling" | "parent" | "specific" | "body";

export interface SoarHTMLAttributeContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    selectorName: string;
    context: boolean;
    contextAttribute?: EditableValue<string | Big | boolean>;
    elemSelector: ElemSelectorEnum;
    specificElement: string;
}

export interface SoarHTMLAttributePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    selectorName: string;
    context: boolean;
    contextAttribute: string;
    elemSelector: ElemSelectorEnum;
    specificElement: string;
}
