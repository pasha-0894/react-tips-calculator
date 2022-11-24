import { ChangeEventHandler, MouseEventHandler } from "react";

export interface IOption {
  value: string;
  label?: string;
}

export interface IButton {
  handleCalc: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export interface IInput {
  placeholder: string;
  handleInput: ChangeEventHandler<HTMLInputElement> | undefined;
  value: string;
  label?: string;
}

export interface ISelect {
  value: {};
  handleValue: (event: unknown) => void;
  options: IOption[];
}
