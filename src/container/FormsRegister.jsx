import React from "react"
import styled from "styled-components"

import Heading from "../components/Heading.jsx"
import FormRegisterUser from "../components/FormRegisterUser/FormRegisterUser.jsx"


const FormRegister = () => {
    return (
        <FormSection>
            <div className="container">
                <FormWrap>
                    <Heading title='Working with POST request' />
                    <FormRegisterUser/>
                </FormWrap>
            </div>
        </FormSection>
    )
}

export default FormRegister

const FormSection = styled.section`
    margin-bottom: 100px;
`

const FormWrap = styled.div`
text-align: center;
`