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
   padding-bottom:5em;  
`;

/*região animada que desce e sobe*/
const BackDrop = styled.div`
   width:160%;
   height:550px;
   position: absolute;
   display:flex;
   flex-direction:column;
   border-radius: 50%;
   top:-290px;
   left:-70px;
   background: rgb(2,0,36);
   background: linear-gradient(58deg, rgba(2,0,36,1) 0%, rgba(41,9,121,1) 20%, rgba(0,212,255,1) 100%);
`;


export function AccountBox(props) {
    return <BoxContainer>
        <TopContainer>
            <BackDrop
            
            />
        </TopContainer>
    </BoxContainer>
}