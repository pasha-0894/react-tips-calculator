import { Fragment } from "react";
import { GlobalStyle } from "./GlobalStyles";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { Form } from "./components/Form/Form";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <Form />
    </Fragment>
  );
};
