import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import Submit from '../Buttons.jsx'

// document.querySelector('input').addEventListener('focusin', function () {
//     document.querySelector(this).parent().querySelector('label').classList.add('active');
// });

// document.querySelector('input').addEventListener('focusout', function () {
//     if (!this.value) {
//         document.querySelector(this).parent().querySelector('label').classList.remove('active');
//     }
// });

export default function FormRegisterUser() {
    const onSubmit = (values) => {
        alert(JSON.stringify(values))
    }

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: ""
        },
        validateOnBlur: true,
        onSubmit,
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <InputItem>
                <Label>Your Name</Label>
                <Input
                    type="text"
                    name="name"
                />
            </InputItem>
            <InputItem>
                <Label>Email</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </InputItem>
            <InputItem>
                <Label>Phone</Label>
                <Input
                    type="text"
                    name="phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
            </InputItem>

            <InputRadioWrap>
                <LabelRadio>Select your position</LabelRadio>
                <RadioList>
                    <RadioListItem>
                        <RadioButton type="radio"/> 
                        <RadioLabel>apple</RadioLabel>
                    </RadioListItem>
                </RadioList>
            </InputRadioWrap>


            <Submit
                type={'submit'}
                class={'btn-submit'}
                buttonTitle={'Submit'}
            />
        </form>
    )
}

const InputItem = styled.div`
position: relative;
max-width: 380px;
width: 100%;
`

const Label = styled.label`
position: absolute;
left: 15px;
top:50%;
transform: translate(0%, -50%);
transition: top .4s ease-in-out, font-size .4s ease-in-out;

z-index: 0;

font-family: 'Nunito';
font-weight: 400;
font-size: 16px;

color: #7E7E7E;

&.active {
    font-size: 12px;
    font-weight: 500;
    top: 0px;
    background-color: #f5f5f5;
    z-index: 6;
}
`

const LabelRadio = styled.label`
font-family: 'Nunito';
font-size: 16px;
line-height: 26px;
color: rgba(0, 0, 0, 0.87);
margin-bottom: 11px;
`

const Input = styled.input`
position: relative;
z-index: 5;

max-width: 380px;
width: 100%;

font-family: 'Nunito';
font-weight: 400;
font-size: 16px;
line-height: 26px;

background: #f8f8f800;
color: rgba(0, 0, 0, 0.87);

height: 54px;
padding: 14px 16px;
border: 1px solid #D0CFCF;
border-radius: 4px;

outline: none;
`

const InputRadioWrap = styled.div`
max-width: 380px;
width: 100%;
text-align:left;
`

const RadioList = styled.ul`

`

const RadioListItem = styled.li`

`

const RadioButton = styled.input`

`

const RadioLabel = styled.label`

`