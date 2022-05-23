import React from "react";
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
import { useContext } from 'react';


export function SignUpForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Nome Completo" />
        <Input type="email" placeholder="Digite seu e-mail" />
        <Input type="password" placeholder="Digite sua senha" />
        <Input type="password" placeholder="Confirmar senha" />
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Esqueci minha senha</MutedLink>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Cadastre-se</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Já tem uma conta?
        <Boldlink href="#" onClick={switchToSignin}>
          Signup
        </Boldlink>
      </MutedLink>
    </BoxContainer>
  );
}
