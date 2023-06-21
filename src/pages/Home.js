import {JumbotronContainer} from "../containers/Jumbotron";
import {FaqsContainer} from "../containers/Faqs";
import {FooterContainer} from "../containers/Footer";
import React from "react";
import {HeaderContainer} from "../containers/Header";
import Feature from "../components/Feature";
import OptForm from "../components/opt-form";

export default function Home() {
    return <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimidet Films, TV programmes and more.</Feature.Title>
                <Feature.SubTitle>Watch anywhere. Cancel at any time</Feature.SubTitle>

                <OptForm>
                    <OptForm.Input placeholder = 'Email Address'/>
                    <OptForm.Button>Try it Now</OptForm.Button>
                    <OptForm.Break/>
                    <OptForm.Text>Ready to Watch? Enter your email to create or restart your membership</OptForm.Text>
                </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer/>
        <FaqsContainer/>
        <FooterContainer/>
    </>
}