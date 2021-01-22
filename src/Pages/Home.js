import React from 'react'
import { HeroBg, HeroContainer, HeroLeft, HeroSection, Logo, Nav, NavItems, HeroButtonWrapper, HeroBgContainer } from '../Components/HeroElements';
import Bg from '../assets/undraw_respond_2.svg';

function Home() {
    return (
        <div >
            <Nav>
                <Logo>SEND</Logo>
                <NavItems>
                    <a href="/"> Home</a>
                    <a href="/"> About</a>
                    <a href="/"> Contact</a>

                </NavItems>

            </Nav>
            <HeroSection>
                <HeroContainer>
                    <HeroLeft>
                        <h1>Send Unlimited Messages</h1>
                        <p>No contracts or unwanted fees.Exclusive
                             offer for new customers only.</p>
                        <HeroButtonWrapper>
                            <button>Get Started</button>
                        </HeroButtonWrapper>
                    </HeroLeft>
                    <HeroBgContainer>
                        <HeroBg src={Bg}/>
                    </HeroBgContainer>
                    
                </HeroContainer>
                


            </HeroSection>

        </div>
    )
}

export default Home
