import {
  CSSProperties,
  ChangeEvent,
  Component,
  ReactNode,
  createElement
} from "react";
import classNames from "classnames";

export interface InputProps {
  value: string;
  className?: string;
  index?: number;
  style?: CSSProperties;
  tabIndex?: number;
  onUpdate?: (value: string) => void;
  disabled?: boolean;
  onLeave?: (value: string | number, changed: boolean) => void;
  labelAttribute: string;
}

interface InputState {
  editedValue?: string;
  editedLabel?: string;
}

export class TextInput extends Component<InputProps> {
  private readonly onChangeHandle = this.onChange.bind(this);
  private readonly onBlurHandle = this.onBlur.bind(this);
  readonly state: InputState = {
    editedValue: undefined,
    editedLabel: undefined
  };

  componentDidUpdate(prevProps: InputProps): void {
    if (this.props.value !== prevProps.value) {
      this.setState({ editedValue: undefined });
      this.setState({ editedLabel: undefined });
    }
  }
  render(): ReactNode {
    const className = classNames("form-control", this.props.className);
    return (
      <div className="textbox-input">
        <div className="textbox-container">
          <div className="material-textfield">
            <input
              type="text"
              placeholder=" "
              className={className}
              style={this.props.style}
              value={this.getCurrentValue()}
              tabIndex={this.props.tabIndex}
              onChange={this.onChangeHandle}
              disabled={this.props.disabled}
              onBlur={this.onBlurHandle}
            />
            <label>
              {" "}{this.getCurrentLabel()}{" "}
            </label>
          </div>
        </div>
      </div>
    );
  }

  private getCurrentValue(): string {
        return this.state.editedValue !== undefined ? this.state.editedValue : this.props.value;
    }

  private getCurrentLabel(): string {
    return this.state.editedLabel !== undefined
      ? this.state.editedLabel
      : this.props.labelAttribute;
  }

  private onChange(event: ChangeEvent<HTMLInputElement>): void {
    this.setState({ editedValue: event.target.value });
  }
  private onBlur(): void {
    const inputValue = this.props.value;
    const currentValue = this.getCurrentValue();
    if (this.props.onLeave) {
      this.props.onLeave(currentValue, currentValue !== inputValue);
    }
    this.setState({ editedValue: undefined });
  }
}
