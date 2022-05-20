import React from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton } from "./common";
import {Marginer} from "../..marginer/"

export function LoginForm(props) {
    return (
        <BoxContainer>
            <FormContainer>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Password" />
                <Marginer direction="vertical" margin={5} />
                <MutedLink href="#">Esqueci minha senha</MutedLink>
                <Marginer direction="vertical" margin="1em"/>
                <SubmitButton type="submit">Entrar</SubmitButton>
            </FormContainer>
        </BoxContainer>
    )
}