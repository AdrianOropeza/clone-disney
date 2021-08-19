import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return ( 
        <Container>
           <CTA>
               <CTALogoOne src="/images/cta-logo-one.svg" alt="logo" />
                <SignUp>GET ALL THERE</SignUp>
                <DescriptionComponent>
                    Get Premier Access to Raya and the Last Dragon in Disney Plus, with a Disney+ subscription. As of 03/06/21, the price 1$
                </DescriptionComponent>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="logo2" />
           </CTA>
        </Container>
     );
}

const Container = styled.div`
    display: flex;
    height: calc(100vh - 70px);
    position: relative;
    align-items: top;
    justify-content: center;

    &::before {
        background-image: url('/images/login-background.jpg');
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        z-index: -1;
    }
`;

const CTA = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    margin-top:100px;
`;

const CTALogoOne = styled.img`

`;

const SignUp = styled.a`
    width: 100%;
    background-color:#0063e5;
    font-weight: bold;
    padding: 17px 0;
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`;

const DescriptionComponent = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

const CTALogoTwo = styled.img`
    width: 90%;
    margin-top: 15px;
`;
 
export default Login;