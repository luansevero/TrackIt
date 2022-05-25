import styled from "styled-components"

import TopBar from "../logged/TopBar"
import FooterNav from "../logged/FooterNav"

import {Body, Main, Title, SectionInfo} from "../logged/style"

export default function HabitsPage(){
    return(
        <Body>
            <TopBar />
            <Main>
                <CreateSection>
                    <Title>Meus Hábitos</Title>
                    <button>+</button>
                </CreateSection>
            </Main>
            <FooterNav />
        </Body>
    )
}
const CreateSection = styled.section`
    font-weight: 400;
    button{
        width: 16px;
        height: 34px;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
    }
`
const HabitsSection = styled.section`
`