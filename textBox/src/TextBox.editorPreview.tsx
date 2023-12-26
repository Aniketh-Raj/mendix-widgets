import { Component, ReactNode, createElement } from "react";
import { TextBoxPreviewProps } from "../typings/TextBoxProps";
import { TextInput } from "./components/TextInput";

export class preview extends Component<TextBoxPreviewProps> {
    render(): ReactNode {
        return <TextInput value={this.props.textAttribute} labelAttribute={this.props.labelAttribute} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/TextBox.css");
}
