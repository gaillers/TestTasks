import React, { useEffect, useState } from "react"
import styled from 'styled-components'
import { useFormik } from 'formik'
import { getPosition } from "../../api/endPosition.js"
// import { InputUpload } from "./UploadFile.js"
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
    const finputs = Array.from(document.querySelectorAll('.file-upload [type="file"]'));
    finputs.forEach((input) => {
        input.addEventListener("change", (e) => {
            const path = e.target.value;
            const filenameField = e.target.parentElement.querySelector("span");
            const filename = path.split(/\/|\\/).pop();
            if (filename) filenameField.innerText = filename;
            else filenameField.innerText = "Filename";
        });
    });

    const [positions, setPosition] = useState([])

    useEffect(() => {
        getPosition((paramPositions) => setPosition(paramPositions))
    }, [])

    const onSubmit = (values, e) => {
        alert(JSON.stringify(values))
        console.log(JSON.stringify(values))
    }


    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            position: "",
            avatar: "",
        },
        validateOnBlur: true,
        onSubmit,
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <InputItem>
                <Label htmlFor="name">Your Name</Label>
                <Input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
               
                />
            </InputItem>
            <InputItem>
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </InputItem>
            <InputItem>
                <Label htmlFor="phone">Phone</Label>
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
                {positions.length > 0 && (
                    <RadioList>
                        {positions.map(position => (
                            <RadioListItem key={position.id}>
                                <RadioButton
                                    id={`name: ${position.name}`}
                                    name="position"
                                    type="radio"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={position.name}
                                />
                                <RadioLabel
                                    value={position.name}
                                    htmlFor={`name: ${position.name}`}
                                >
                                    {position.name}
                                </RadioLabel>
                            </RadioListItem>
                        ))}
                    </RadioList>
                )}
            </InputRadioWrap>

            <Uploadfile className="file-upload reverse">
                <input
                    id="file-sr"
                    name="avatar"
                    type="file"
                    accept='.jpeg, .jpg'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <label htmlFor="file-sr">
                    <button>Upload</button>
                    <span>Upload your photo</span>
                </label>
            </Uploadfile>

            <Submit
                type={'submit'}
                class={'btn-submit'}
                buttonTitle={'Sign up'}
            />
        </form>
    )
}

const InputItem = styled.div`
position: relative;
max-width: 380px;
width: 100%;
margin: 50px auto 0;

&div+div {
    margin: auto;
}
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
margin: 25px auto 47px;
`

const RadioList = styled.ul`
margin: 11px 0 0px;
`

const RadioListItem = styled.li`
 margin-bottom: 7px;
 &:last-child {
    margin-bottom: 0;
 }
`

const RadioButton = styled.input`
&:checked, 
&:not(:checked) {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  &:checked + label, 
  &:not(:checked) + label {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    line-height: 26px;
    display: inline-block;
  }

  &:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 20px;
    height: 20px;
    border: 1px solid #00BDD3;
    border-radius: 100%;
    background: #fff;
  } 

  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 20px;
    height: 20px;
    border: 1px solid #D0CFCF;
    border-radius: 100%;
    background: transparent;
    
  }

  &:checked + label:after {
    content: '';
    width: 10px;
    height: 10px;
    background: #00BDD3;
    position: absolute;
    top: 8px;
    left: 5px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  &:not(:checked) + label:after {
    content: '';
    width: 10px;
    height: 10px;
    background: #F87DA9;
    position: absolute;
    top: 8px;
    left: 5px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`

const RadioLabel = styled.label`
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: rgba(0, 0, 0, 0.87);
`
const Uploadfile = styled.div`

position: relative;
max-width: 380px;
width: 100%;
text-align: left;
margin: 0 auto 50px;

[type="file"] {
    display: none;
}

label {
    display: flex;
    background: #f8f8f800;
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    height: 54px;
}

span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;

    max-width: 290px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

button {
    all: unset;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    pointer-events: none;
    border: 1px solid rgba(0, 0, 0, 0.87);
    border-radius: 4px 0px 0px 4px;
    cursor: pointer;
}

span,
button {
    transition: .2s ease;
    padding: 12px 16px;
}

&.reverse:not(.column:checked) {
    span {
        color: #7E7E7E;
    }
}

&.reverse {
    span {
        color: rgba(0, 0, 0, 0.87);
    }
}
`