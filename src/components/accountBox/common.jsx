import styled from "styled-components";

export const BoxContainer = styled.div`
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:10px;
`;

export const FormContainer = styled.form`
    width:100vw;
    display: flex;
    flex-direction: column;
`;

export const MutedLink = styled.a`
    font-size: 12px;
    color:rgba(200,200,200, 0.8);
    font-weight:500;
    text-decoration: none;
`;

export const Boldlink = styled.a`
    font-size: 12px;
    color: rgb(2,0,36);
    font-weight:500;
    text-decoration: none;
`;

export const input = styled.input`
    width:100vw;
    height:42px;
    outline:none;
    border:1px solid rgba(200,200,200,0.0.3);
    padding:0px 10px;
    border-bottom: 1.4px solid transparent;
    
    &::placeholder{
        color:rgba(200,200,200,1);
    }

    &:not(:last-of-type){
      border-bottom:1.5px solid rgba(200,200,200, 0.4);
    }

    &:focus{
        outline: none;
        border-bottom:2px solid rgb(2,0,36);
    }
`;

export const SubmitButton = styled.button`
    width:100vw;
    padding:11px 40%;
    color:#fff;
    font-size:15px;
    font-weight:600;
    border:none;
    border-radius:100px 100px 100px 100px;
    cursor:pointer;
    transition: all, 240ms ease-in-out;

    background: rgb(2,0,36);
    background: linear-gradient(58deg, rgba(2,0,36,1) 0%, rgba(41,9,121,1) 20%, rgba(0,212,255,1) 100%);

    &:hover{
        filter:brightness(1.03);
    }
`;