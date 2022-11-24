import { IInput } from "../../types/types";
import { StyledInput } from "./styles";

export const Input = ({ placeholder, handleInput, value }: IInput) => {
  return (
    <StyledInput type="number" placeholder={placeholder} onChange={handleInput} value={value} />
  );
};
