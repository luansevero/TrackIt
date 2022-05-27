import axios from "axios"
import { useContext, useEffect, useState } from "react"
import TokenContext from "../../contexts/TokenContext"

import TopBar from "../logged/TopBar"
import FooterNav from "../logged/FooterNav"
import TodayHabits from "./todaypage/TodayHabits"

import styled from "styled-components"
import { Body, Main } from "../logged/style"
import Loading from "../loadings/PageLoading"

export default function TodayPage() {

    const [isLoading, setIsLoading] = useState(true);
    const { token } = useContext(TokenContext);
    const [dailyHabits, setDailyHabits] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", token);
        promisse.then((res) => {
            setDailyHabits(res.data)
            setIsLoading(false)
        })
        promisse.catch((res) => {
            
        })
    }, [])


    return (
        <Body>

            <TopBar />
            <Main>
                <Header>
                    <h1>Quarta, 25/05</h1>
                    <h2 dontmadeit="sim">Nenhum hábito concluído ainda</h2>
                </Header>
                {isLoading
                    ? <Loading />
                    : <TodayHabits dailyHabits={dailyHabits} setDailyHabits={setDailyHabits}/>
                }
            </Main>
            <FooterNav />
        </Body>
    )
}

const Header = styled.section`
    font-weight: 400;
    h1{
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5; 
    }
    h2{
        font-size: 17.976px;
        line-height: 22px;
        color: #${props => props.dontmadeit === "sim" ? "BABABA" : "8FC549"};
        margin-bottom: 28px;
    }
`

