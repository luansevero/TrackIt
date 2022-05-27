import styled from "styled-components"
import axios from "axios"
import { useState, useContext, useEffect } from "react"

import TokenContext from "../../../contexts/TokenContext"

import check from "../../../assets/Vector.png"

export default function TodayHabits({dailyHabits, setDailyHabits}) {
    const api = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const { token } = useContext(TokenContext);

    useEffect(() => {
        const promisse = axios.get(`${api}/today`, token)

        promisse.then((res) => {
            setDailyHabits(res.data);
        })
    }, [])

    function handleComplete(id, done){
        const isdone = !done
        console.log(id, done, isdone)
        let toggleCheck;
        if(isdone){
            toggleCheck = "check"
        } else {
            toggleCheck = "uncheck"
        }
        console.log(toggleCheck)
        const promisse = axios.post(`${api}/${id}/${toggleCheck}`, token);
        promisse.then(() => {
            const habitIndex = dailyHabits.findIndex((obj) => obj.id == id)
            setDailyHabits([...dailyHabits, dailyHabits[habitIndex].done = isdone])
            console.log(dailyHabits)
        })
        
    }

    return (
        <>
            {dailyHabits.map((habit) => {
                return(
                <Habits key={habit.id} id={habit.id}>
                    <HabitsInfoContainer>
                        <h2>{habit.name}</h2>
                        <p>Sequência atual: <span color={habit.done}>{habit.currentSequence} dias</span></p>
                        <p>Seu recorde: <span color={(habit.currentSequence === habit.highestSequence) ? true : undefined} >{habit.highestSequence} dias</span></p>
                    </HabitsInfoContainer>
                    <CheckList isDone={habit.done} onClick={() => handleComplete(habit.id, habit.done)}>
                        <img src={check} id={habit.id} />
                    </CheckList>
                </Habits>
                )
            })}
        </>
    )
}

const Habits = styled.section`
    display:flex;
    justify-content: space-between;
    width: 340px;
    min-height: 94px;
    padding: 13px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 5px 0;
    :first-of-type{
        margin-top: 0px;
    }
    :last-of-type{
        margin-bottom: 0px;
    }
`
const HabitsInfoContainer = styled.div`
    margin-right: 13px;
    h2,p,span{
        font-weight: 400;
        color: #666666;
    }
    h2{
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom: 7px;
    }
    p,span{
        font-size: 12.976px;
        line-height: 16px;
    }
    span{
        color= #${props => props.color ? "8FC549" : "666666"};
    }
`
const CheckList = styled.button`
    width: 69px;
    height: 69px;
    background: #${props => props.isDone ? "8FC549" : "EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`