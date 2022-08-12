import React from "react";
import styled from "styled-components";

import Heading from "../components/Heading.jsx"
import Teams from "../components/Team/Teams.jsx"

const Working = () => {
    return (
        <section className="working-section">
            <div className="container">
                <WorkingWrap>
                    <Heading title='Working with GET request' />
                    <Teams/>
                </WorkingWrap>
            </div>
        </section>
    )
}

const WorkingWrap = styled.div`
    text-align: center;
`


export default Working;