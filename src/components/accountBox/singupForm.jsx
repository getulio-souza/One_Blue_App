import { Field, useFormik } from "formik";
import React, { useState } from "react";
import {
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
  Input,
  Boldlink,
  FieldContainer,
  FieldError,
  FormSuccess,
  FormError,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useContext } from "react";
import * as yup from "yup";
import axios from "axios";
// import { CadasterController } from "../../Controllers/cadasterController";

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
    .required("E-mail obrigatório"),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Por favor, digite uma senha forte")
    .required("senha obrigatória"),
  confirmarSenha: yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: yup
      .string()
      .required("Por favor, confirme sua senha")
      .oneOf(
        [yup.ref("password")],
        "As senhas precisam ser iguais. Tente novamente."
      ),
  }),
});

export function SignUpForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const {fullName, password, confirmarSenha } = values; 
    const response = await axios.post("http://localhost:3000/Controllers/cadasterController", data).catch((err) => {
      if (err && err.response)
      setError(err.response.data.message);
      setSuccess(null);
    });
    
    if (response && response.data) {
      setError(null);
      setSuccess(response.data.message)
      formik.resetForm();
    }
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

  return (
    <BoxContainer>
      {!error && <FormSuccess>{success ? success : "Cadastro realizado com sucesso!"}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
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
        <SubmitButton type="submit" disabled={!formik.isValid}>Cadastre-se</SubmitButton>
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
