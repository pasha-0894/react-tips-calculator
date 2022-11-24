import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { Header, Subheader, Total, Wrapper } from "./styles";
import "./styles.ts";
import { CustomSelect } from "../Select/CustomSelect";
import { IOption } from "../../types/types";
import { Button } from "../Button/Button";

const options: IOption[] = [
  { value: "10", label: "10%" },
  { value: "15", label: "15%" },
  { value: "20", label: "20%" },
];

export const Form = () => {
  const [tips, setTips] = useState(options[0]);
  const [persons, setPersons] = useState("");
  const [bills, setBills] = useState("");
  const [result, setResult] = useState(0);

  const handleValue = (newValue: unknown) => {
    setTips(newValue as SetStateAction<IOption>);
  };

  const handlePersons = (event: ChangeEvent<HTMLInputElement>) => {
    setPersons(event.target.value);
  };

  const handleBills = (event: ChangeEvent<HTMLInputElement>) => {
    setBills(event.target.value);
  };

  const handleCalc = () => {
    const sum = +bills / 1 + (+bills * +tips.value) / 100;
    setResult(sum / +persons);
  };

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const newDisabled = bills && persons ? false : true;
    setDisabled(newDisabled);
  });

  return (
    <Wrapper>
      <Header>Welcome to App</Header>
      <Subheader>Let’s go calculate your tips</Subheader>
      <Input placeholder="Enter bill" handleInput={handleBills} value={bills}></Input>
      <Input placeholder="Enter persons" handleInput={handlePersons} value={persons}></Input>
      <CustomSelect value={tips} handleValue={handleValue} options={options} />
      <Total>Total:{result.toFixed(2)}$</Total>
      <Button disabled={disabled} handleCalc={handleCalc} />
    </Wrapper>
  );
};
