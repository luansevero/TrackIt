import styled from "styled-components"
import { useContext } from "react"

import TopBar from "../logged/TopBar"
import FooterNav from "../logged/FooterNav"

import UserContext from "../../contexts/UserContext"

import { Body, Main, Title, SectionInfo } from "../logged/style"

export default function HabitsPage() {
    const { progress } = useContext(UserContext)

    return (
        <Body>
            <TopBar />
            <Main>
                <Title>Histórico</Title>
                <SectionInfo>
                    <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                </SectionInfo>
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
