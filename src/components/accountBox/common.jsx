import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

/* campo de formulário */ 
export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

/*botão "esqueci minha senha" */
export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 700;
  text-decoration: none;
  margin-top: 10px;
`;

export const Boldlink = styled.a`
  font-size: 12px;
  color: rgb(2, 0, 36);
  font-weight: 500;
  text-decoration: underline;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  padding: 0px 10px;
  border: none;
  transition: all 200ms ease-in-out;
  font-size: 15px;
  text-align: center;

  &:focus {
    outline: none;
    border-bottom: 1px solid rgb(2, 0, 36);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 11px 40%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: 0.5s;
  padding: 15px;

  background: rgb(2, 0, 36);
  background: linear-gradient(
    58deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(41, 9, 121, 1) 20%,
    rgba(0, 212, 255, 1) 100%
  );

  &:hover {
    opacity: 6;
  }
  &:disabled{
    filter:contrast(0.7);
  }
`;

export const FieldContainer = styled.div`
  width:100%;
  display:flex;
  flex-direction: column;
`;

export const FieldError = styled.span`
  color:#b32e2e;
  font-size:11px;
  min-height:18px;
`;

export const FormSuccess = styled.div`
  color: #28a828;
  font-size:12px;
  min-height:20px;
  font-weight: 700;
`;

export const FormError = styled.div`
  color: #b32e2e;
  font-size:12px;
  min-height:20px;
  font-weight: 700;
`;