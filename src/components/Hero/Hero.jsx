import React from "react";
import styled from "styled-components";

import Heading from "../Heading.jsx";
import Text from "../Text.jsx";
import Button from "../Buttons.jsx";

import HeroBackground from '../../assets/images/pexels-alexandr-podvalny-1227513.jpeg';


const Hero = () => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroWrap>
                    <HeroContent>
                        <Heading title='Test assignment for front-end developer' />
                        <Text body="What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving." />
                        <Button class={'btn-signUp'} buttonTitle={'Sign up'} />
                    </HeroContent>
                </HeroWrap>
            </HeroContainer> 
        </HeroSection>
    )
}

const HeroSection = styled.section`
    margin-bottom: 140px;
`

const HeroContainer = styled.div`
    max-width: 1170px;
    width:100%;
    margin: auto;
`

const HeroWrap = styled.div`
    position: relative;
    text-align: center;
    padding: 163px 0;

    background: 
    linear-gradient(0deg, rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)), 
    url(${HeroBackground});

    background-size: 160rem;
    background-position: center -52rem;

    h1 {
        margin-bottom: 21px;
    }
    
    p {
        margin-bottom: 32px;
    }

    @media screen and (max-width: 1024px) {
        background-size: 160rem;
        background-position: center -52rem;
    }

    @media screen and (max-width: 768px) {
        padding: 88px 0;
        background-size: 200rem;
        background-position: center -75rem;
    }

    @media screen and (max-width: 640px) {
        padding: 40px 0 70px;
        background-size: 200rem;
        background-position: center -76rem;
    }
`
const HeroContent = styled.div`
    max-width: 410px;
    width: 100%; 
    padding: 0 15px;
    margin: auto;
    color: #fff;
`

export default Hero;

