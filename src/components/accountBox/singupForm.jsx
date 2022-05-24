import { Field, useFormik } from "formik";
import React from "react";
import {
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
  Input,
  Boldlink,
  FieldContainer,
  FieldError,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useContext } from "react";
import * as yup from "yup";

const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

/* validação dos campos */
const validationSchema = yup.object({
  fullname: yup
    .string()
    .min(3, "Por favor, digite seu nome completo.")
    .required("Nome completo obrgatório!"),
  email: yup
    .string()
    .email("Por favor, digite um endereço de e-mail válido.")
    .required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Por favor, digite uma senha forte")
    .required(),
  confirmarSenha: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "As senhas precisam ser iguais. Tente novamente."
      ),
  }),
});

export function SignUpForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const onSubmit = () => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmarSenha: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log("Error: ", formik.errors);

  return (
    <BoxContainer>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="fullName"
            type="text"
            placeholder="Nome Completo"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName
              : ""}
          </FieldError>
        </FieldContainer>
        
        <FieldContainer>
          <Input
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </FieldError>
        </FieldContainer>

        <FieldContainer>
          <Input
            name="confirmarSenha"
            type="password"
            placeholder="Confirmar senha"
            value={formik.values.confirmarSenha}
            onChange={formik.handleChange}
            onblur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.confirmarSenha && formik.errors.confirmarSenha
              ? formik.errors.confirmarSenha
              : ""}
          </FieldError>
        </FieldContainer>

        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Esqueci minha senha</MutedLink>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit">Cadastre-se</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Já tem uma conta?
        <Boldlink href="#" onClick={switchToSignin}>
          Entrar
        </Boldlink>
      </MutedLink>
    </BoxContainer>
  );
}
