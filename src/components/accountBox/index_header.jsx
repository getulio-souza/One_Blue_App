import React from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { SignUpForm } from "./singupForm";
import { motion } from "framer-motion";
import { useState } from "react";

/* box da tela de cadastro/login */
const BoxContainer = styled.div`
  width:280px;
  min-height:555px;
  display:flex;
  flex-direction:column;
  border-radius:19px;
  background-color:#fff; 
  box-shadow: 0 0 2px rgba(15,15,15,0.28);
  position:relative;
  overflow:hidden;
  `;

/* box do topo */
const TopContainer = styled.div`
   width:100%;
   height:250px;
   display:flex;
   flex-direction:column;
   justify-content: flex-end;
   padding:0 1.8em;
`;

/*região animada que desce e sobe*/
const BackDrop = styled(motion.div)`
   width:160%;
   height:550px;
   position: absolute;
   display:flex;
   flex-direction:column;
   border-radius: 50%;
   transform: rotate(60deg);
   top:-290px;
   left:-70px;
   background: rgb(2,0,36);
   background: linear-gradient(58deg, rgba(2,0,36,1) 0%, rgba(41,9,121,1) 20%, rgba(0,212,255,1) 100%);
`;

const HeaderContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding-bottom:60px;
`;

const HeaderText = styled.h2`
    font-size:30px;
    font-weight:600;
    color:#fff;
    z-index: 10;
    margin:0;
`;

const SmallText = styled.h5`
     color: #fff;
     font-weight:500;
     font-size:11px;
     z-index: 10;
     margin-top:7px;
`;

const InnerContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    padding:1.8em;
`;

const backDropVariants = {
    expanded: {
        width: "233 %",
        height: "1050px",
        borderRadius: "20%",
        transform:"rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    }
}

export function AccountBox(props) {
    /*cabeçalho animado */
    const [isExpanded, SetExpanded] = useState(false);

    return <BoxContainer>
        <TopContainer>
            <BackDrop initial={false} animate={isExpanded ? "expanded" : collapsed} variants={backDropVariants}/>
            <HeaderContainer>
                <HeaderText>Bem-vindo </HeaderText>
                <HeaderText>de volta </HeaderText>
                <SmallText>Por favor, entre para continuar</SmallText>
            </HeaderContainer>
        </TopContainer>
        <InnerContainer>
            <LoginForm/>
            {/* <SignUpForm/> */}
        </InnerContainer>
    </BoxContainer>
}