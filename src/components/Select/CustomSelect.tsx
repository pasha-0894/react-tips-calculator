import Select from "react-select";
import { ISelect } from "../../types/types";
import { styles } from "./styles";

export const CustomSelect = ({ value, handleValue, options }: ISelect) => {
  return <Select value={value} onChange={handleValue} options={options} styles={styles} />;
};
