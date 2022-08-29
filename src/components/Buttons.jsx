import React from "react";
import styled, { css } from 'styled-components';

const Buttons = (props) => {
    return (
        <Button primary
            className={`button ${props.class}`}
            type={props.type} >
            {props.buttonTitle}
        </Button>
    )
}

const Button = styled.button`
max-width: 100px;
width: 100%;
border-radius: 80px;
border: none;
padding: 4px 0;


font-family: 'Nunito';
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #201D08;

transition: all 0.4s ease-in;
cursor: pointer;

&:disabled {
  color: #fff;
  background: #B4B4B4;
}

  ${props => props.primary && css`
    background: #F4E041;

    &:hover, &:focus {
        background: #FFE302;
    }
  `}
  
  ${props => props.secondary && css`
    color: #fff;
    background: #00BDD3;

    &:hover, &:focus {
        background: #00a6ba;
    }
  `}
`;

export default Buttons;

