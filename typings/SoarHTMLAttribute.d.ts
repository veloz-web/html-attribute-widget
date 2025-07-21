/**
 * This file was generated from MyWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { CSSProperties } from "react";
import { ActionPreview } from "@mendix/pluggable-widgets-typing-generator/dist/typings";
import { ActionValue, EditableValue } from "mendix";

interface CommonProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
}

export type BootstrapStyleEnum = "default" | "primary" | "success" | "info" | "inverse" | "warning" | "danger";

export type MywidgetTypeEnum = "badge" | "label";

export interface MyWidgetContainerProps extends CommonProps {
    valueAttribute?: EditableValue<string | BigJs.Big>;
    mywidgetValue?: string;
    bootstrapStyle: BootstrapStyleEnum;
    mywidgetType: MywidgetTypeEnum;
    onClickAction?: ActionValue;
}

export interface MyWidgetPreviewProps extends CommonProps {
    valueAttribute?: string;
    mywidgetValue?: string;
    bootstrapStyle: BootstrapStyleEnum;
    mywidgetType: MywidgetTypeEnum;
    onClickAction?: ActionPreview;
}

export interface VisibilityMap {
    valueAttribute: boolean;
    mywidgetValue: boolean;
    bootstrapStyle: boolean;
    mywidgetType: boolean;
    onClickAction: boolean;
}
