import React from "react";
import styled from "styled-components"

const Text = (props) => {
   return (
    <Body>{props.body}</Body>
   )
}

export default Text;

const Body = styled.p`
 font-family: 'Nunito';
 font-style: normal;
 font-weight: 400;
 font-size: 16px;
 line-height: 26px;
`;