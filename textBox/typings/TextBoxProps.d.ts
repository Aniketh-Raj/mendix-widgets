/**
 * This file was generated from TextBox.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { EditableValue } from "mendix";

export interface TextBoxContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textAttribute: EditableValue<string>;
    labelAttribute: EditableValue<string>;
}

export interface TextBoxPreviewProps {
    readOnly: boolean;
    textAttribute: string;
    labelAttribute: string;
    onChangeAction: {} | null;
}
