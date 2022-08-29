import React from "react";
import styled from "styled-components";

import Heading from "../components/Heading.jsx"
import Teams from "../components/Team/Teams.jsx"

const Working = () => {
    return (
        <WorkingSection>
            <div className="container">
                <WorkingWrap>
                    <Heading title='Working with GET request' />
                    <Teams/>
                </WorkingWrap>
            </div>
        </WorkingSection>
    )
}

const WorkingSection = styled.section`
    margin-bottom: 140px;
`

const WorkingWrap = styled.div`
    text-align: center;
`


export default Working;