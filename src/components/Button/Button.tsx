import { IButton } from "../../types/types";
import { CustomButton } from "./styles";

export const Button = ({ disabled, handleCalc }: IButton) => {
  return (
    <CustomButton disabled={disabled} onClick={handleCalc}>
      Ohhhoooo 🍻
    </CustomButton>
  );
};
