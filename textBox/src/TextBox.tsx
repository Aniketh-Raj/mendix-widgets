import { Component, ReactNode, Fragment, createElement } from "react";
import { hot } from "react-hot-loader/root";

import { TextBoxContainerProps } from "../typings/TextBoxProps";
import { TextInput } from "./components/TextInput";
import { Alert } from "./components/Alert";

import "./ui/TextBox.css";

class TextBox extends Component<TextBoxContainerProps> {
    private readonly onLeaveHandle = this.onLeave.bind(this);
    componentDidMount(): void {
        // this.props.textAttribute.setValidator(this.validator.bind(this));
    }
    render(): ReactNode {
        const value = this.props.textAttribute.value || "";
        const labelValue = this.props.labelAttribute.value || "";
        const validationFeedback = this.props.textAttribute.validation;
        return <Fragment>
            <TextInput
                value={value}
                tabIndex={this.props.tabIndex}
                disabled={this.isReadOnly()}
                onLeave={this.onLeaveHandle}
                labelAttribute={labelValue}
            />
            <Alert>{validationFeedback}</Alert>
        </Fragment>
    }

    private isReadOnly(): boolean {
        return this.props.textAttribute.readOnly;
        }
        private onLeave(value: string, isChanged: boolean): void {
            if (!isChanged) {
                return;
            }
            this.props.textAttribute.setValue(value);
        }
        // private validator(value: string | undefined): string | undefined {
        //     const { requiredMessage } = this.props;
        //     if (requiredMessage && requiredMessage.value && !value) {
        //         return requiredMessage.value;
        //     }
        //     return;
        // }
}


export default hot(TextBox);
