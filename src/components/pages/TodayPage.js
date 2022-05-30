import axios from "axios"
import { useContext, useEffect, useState } from "react"
import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import "dayjs/locale/pt-br"

import TokenContext from "../../contexts/TokenContext"
import UserContext from "../../contexts/UserContext"

import TopBar from "../logged/TopBar"
import FooterNav from "../logged/FooterNav"
import TodayHabits from "./todaypage/TodayHabits"

import styled from "styled-components"
import { Body, Main } from "../logged/style"
import Loading from "../loadings/PageLoading"

export default function TodayPage() {
    const [isLoading, setIsLoading] = useState(true);
    const { token } = useContext(TokenContext);
    const { progress, setProgress } = useContext(UserContext);
    const [dailyHabits, setDailyHabits] = useState([]);
    const [dontMadeYet, setDontMadeYet] = useState(true)

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", token);
        promisse.then((res) => {
            setDailyHabits(res.data)
            setIsLoading(false)
            progressPercentage(res.data)
        })
        promisse.catch((res) => {

        })
    }, [])

    function progressPercentage(habits) {
        const percentage = 100 / habits.length
        let madeIt = 0;
        for (let i = 0; i < habits.length; i++) {
            if (habits[i].done) {
                madeIt++
            }
        }
        setProgress((percentage * madeIt))
        if ((percentage * madeIt) > 0) {
            setDontMadeYet(false)
        } else {
            setDontMadeYet(true)
        }
    }

    function refreshHabits() {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", token);
        promisse.then((res) => {
            setDailyHabits(res.data)
            setIsLoading(false)
            progressPercentage(res.data)
        })
        promisse.catch((res) => {

        })
    }



    function getDate() {
        dayjs.extend(weekday);
        const rawDate = dayjs().locale('pt-br').format("dddd D/MM");
        return formatDay(rawDate)
    }

    function formatDay(string) {
        const trace = string.indexOf('-');
        const empty = string.indexOf(' ');
        const day = string.slice(empty);
        let weekday = string.slice(0, empty);
        if (trace !== -1) {
            weekday = string.slice(0, trace);
        }
        weekday = weekday.replace(string[0], string[0].toUpperCase());
        return `${weekday},${day}`;
    }
    const day = getDate()


    return (
        <Body>
            <TopBar />
            {isLoading
                ? <Loading />
                : <Main>
                    <Header>
                        <h1>{day}</h1>
                        {dontMadeYet
                            ? <h2 dontmadeyet="sim">Nenhum hábito concluído ainda</h2>
                            : <h2 dontmadeyet="não">{progress}% dos hábitos concluídos</h2>
                        }
                    </Header>
                    {dailyHabits.map((habit) => {
                        return (<TodayHabits habit={habit} dailyHabits={dailyHabits} refreshHabits={refreshHabits} progressPercentage={progressPercentage} />)
                    })}

                </Main>
            }
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
        color: #${props => props.dontMadeYet === "sim" ? "BABABA" : "8FC549"};
        margin-bottom: 28px;
    }
`

