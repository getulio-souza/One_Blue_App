import React, { useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
  Input,
  Boldlink,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
// import {Login} from "../../Services/Login"

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Digite seu e-mail" />
        <Input type="password" placeholder="Digite sua senha" />
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Esqueci minha senha</MutedLink>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit">Entrar</SubmitButton>
      <MutedLink href="#">
        Não tem cadastro?{" "}
        <Boldlink href="#" onClick={switchToSignup}>
          Cadastre-se
        </Boldlink>
      </MutedLink>
    </BoxContainer>
  );
}
