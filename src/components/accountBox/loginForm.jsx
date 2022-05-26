import React, { useContext, useState } from "react";
import {
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
  Input,
  Boldlink,
  FieldContainer,
  FieldError,
  FormError,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { Field, useFormik, validateYupSchema } from "formik";
import * as yup from "yup";
import axios from "axios";


// import {Login} from "../../Services/Login"

const validationSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required(),
});

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    setError(null);
    const response = await axios.post("http://localhost:3000/Controllers/cadasterController", values).catch((err) => {
      if (err && err.response)
        setError(err.response.data.message);
    });
    if (response) {
      alert("Welcome back in. Authenticating...");
      }
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <BoxContainer>
      <FormError>{error ? error : ""}</FormError>
      <FormContainer onSubmit={formik.handleSubmit}>
        <FieldContainer>
          <Input
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
            onBlur={formik.handleBlur}
          />
          <FieldError>
            {formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""}
          </FieldError>
        </FieldContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#">Esqueci minha senha</MutedLink>
        <Marginer direction="vertical" margin="1em" />
        <SubmitButton type="submit" disabled={!formik.isValid}>
          Entrar
        </SubmitButton>
      </FormContainer>
      <MutedLink href="#">
        Não tem cadastro?{" "}
        <Boldlink href="#" onClick={switchToSignup}>
          Cadastre-se
        </Boldlink>
      </MutedLink>
    </BoxContainer>
  );
}
