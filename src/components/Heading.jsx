import React from "react";
import styled from "styled-components";

const Headings = (props) => {
   return (
    <Heading>{props.title}</Heading>
   )
}

const Heading = styled.h1`
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 40px;
`


export default Headings;