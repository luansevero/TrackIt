import styled from "styled-components"
import axios from "axios"
import { useState, useContext, useEffect } from "react"

import TokenContext from "../../../contexts/TokenContext"

import check from "../../../assets/Vector.png"

export default function TodayHabits({ habit, refreshHabits, progressPercentage }) {
    const api = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const { token } = useContext(TokenContext);
    const [isEqual, setIsEqual] = useState("false");
    let corzinha;

    function handleDaySequence(){
        let day;
        (habit.currentSequence <= 1) ? day = "dia" : day = "dias";
        return (<>{day}</>)
    }
    function handleDayHighest(){
        let day;
        (habit.highestSequence <= 1) ? day = "dia" : day = "dias";
        return(<>{day}</>)
    }
    const daySequence = handleDaySequence();
    const dayHighest = handleDayHighest();


    function handleComplete(id, done) {
        const isdone = !done
        let toggleCheck;
        if (isdone) {
            toggleCheck = "check"
        } else {
            toggleCheck = "uncheck"
        }
        const promisse = axios.post(`${api}/${id}/${toggleCheck}`, {}, token);
        promisse.then(() => {
            refreshHabits()
        })

    }

    return (
        <Habits key={habit.id} id={habit.id} >
            <HabitsInfoContainer currentColor={habit.done} highestColor={(habit.currentSequence === habit.highestSequence && habit.currentSequence != 0)}>
                <h2>{habit.name}</h2>
                <p>Sequência atual: <span className="current">{habit.currentSequence} {daySequence}</span></p>
                <p>Seu recorde: <span className="highest">{habit.highestSequence} {dayHighest}</span></p>
            </HabitsInfoContainer>
            <CheckList isDone={habit.done} onClick={() => handleComplete(habit.id, habit.done)}>
                <img src={check} id={habit.id} />
            </CheckList>
        </Habits>
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
        margin-bottom: 10px;
    }
`
const HabitsInfoContainer = styled.div`
    margin-right: 13px;
    h2,p,span{
        max-width: 248px;
        font-weight: 400;
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
    span.current{
        color: #${props => props.currentColor ? "8FC549" : "666666"};
    }
    span.highest{
        color: #${props => props.highestColor ? "8FC549" : "666666"};
    }
`
const CheckList = styled.button`
    width: 69px;
    height: 69px;
    background: #${props => props.isDone ? "8FC549" : "EBEBEB"};
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`