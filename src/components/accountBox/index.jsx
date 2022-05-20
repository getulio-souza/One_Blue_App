import React from "react";
import styled from "styled-components";

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
   width:100vw;
   height:250px;
   display:flex;
   flex-direction:column;
   justify-content: flex-end;
   padding:0 1.8em;
`;

/*região animada que desce e sobe*/
const BackDrop = styled.div`
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
    width:100vw;
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
`;

export function AccountBox(props) {
    return <BoxContainer>
        <TopContainer>
            <BackDrop />
            <HeaderContainer>
                <HeaderText>Bem-vindo </HeaderText>
                <HeaderText>de volta </HeaderText>
                <SmallText>Por favor, entre para continuar</SmallText>
            </HeaderContainer>
        </TopContainer>
    </BoxContainer>
}