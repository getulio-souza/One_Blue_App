import React from "react";
import { BoxContainer, FormContainer, MutedLink, SubmitButton, Input, Boldlink} from "./common";
import {Marginer} from "../marginer"

export function SignUpForm(props) {
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Nome Completo" />
                <Input type="email" placeholder="Digite seu e-mail"/>
                <Input type="password" placeholder="Digite sua senha"/>
                <Input type="password" placeholder="Confirmar senha"/>
                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#">Esqueci minha senha</MutedLink>
            </FormContainer>
                <Marginer direction="vertical" margin="1em"/>
                <SubmitButton type="submit">Criar Conta</SubmitButton>
        </BoxContainer>
    )
}