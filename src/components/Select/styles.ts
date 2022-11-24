import { StylesConfig } from "react-select";

export const styles: StylesConfig = {
  control: (baseStyles) => ({
    ...baseStyles,
    width: "456px",
    height: "68px",
    background: "#FFFFFF",
    borderRadius: "30px",
  }),
  container: (baseStyles) => ({
    ...baseStyles,
    width: "456px",
    height: "68px",
    justifySelf: "center",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    fontFamily: "Noto Sans SC",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "26px",
    color: "#756C6C",
    paddingLeft: "60px",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    width: "60px",
  }),
};
