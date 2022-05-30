import styled from "styled-components";
import axios from "axios";
import { useState, useContext } from "react"

import TokenContext from "../../../contexts/TokenContext";

import WeekCreator from "../../logged/WeekCreator";

import { Title } from "../../logged/style";
import { Input } from "../../register_login/style";

export default function CreateHabits({ refreshHabits }) {
    const { token } = useContext(TokenContext);
    const[habitCreation, setHabitCreation] = useState(false);
    const [habit, setHabit] = useState("");
    const days = ["d", "s", "t", "q", "q", "s", "s"]
    const [daysSelected, setDaysSelected] = useState([])

    function createHabits(){
        setHabitCreation(!habitCreation);
    }
    function cancelCreation(){
        setHabitCreation(!habitCreation);
    }
    function saveCreation(e){
        e.preventDefault()
        setHabitCreation(!habitCreation);
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            name: habit,
            days: daysSelected
        }, token)
        promisse.then((res) => {
            refreshHabits()
        })
    }
    
    return (
        <CreateSection>
            <Container>
                <Title>Meus Hábitos</Title>
                <button onClick={createHabits}>+</button>
            </Container>
            {habitCreation
                ? <HabitCard>
                    <Input
                        value={habit}
                        placeholder="nome do hábito"
                        onChange={e => setHabit(e.target.value)}
                    />
                    <Week>
                        {days.map((e, index) =>
                            <WeekCreator key={index} dayId={index} dayName={e} setDaysSelected={setDaysSelected} daysSelected={daysSelected} />
                        )}
                    </Week>
                    <Buttons>
                        <CardButton className="cancel" onClick={cancelCreation}>Cancelar</CardButton>
                        <CardButton className="save" onClick={saveCreation}>Salvar</CardButton>
                    </Buttons>
                </HabitCard>
                : ""
            }
        </CreateSection>
    )
}

const CreateSection = styled.section`
    display:flex;
    flex-direction: column;
    font-weight: 400;
`
const Container = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    > button{
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: 26.976px;
        line-height: 34px;
        color: #FFFFFF;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
    }
`
export const HabitCard = styled.div`
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 5px;
    display:flex;
    flex-direction: column;
    padding: 18px;
    width: 100%;
    min-height: 180px;
    font-weight: 400;
`
const Week = styled.div`
    margin-top: 8px;
`
const Buttons = styled.div`
    margin-top: 20px;
    display:flex;
    align-items:center;
    justify-content:flex-end;
`
const DayButtons = styled.button`
    margin: 0 2px;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
    :first-of-type{
        margin-left: 0px;
    }
    :last-of-type{
        margin-rigth: 0px;
    }
`
const CardButton = styled.button`
    font-size: 15.976px;
    line-height: 20px;
    &.cancel{
        color: #52B6FF;
    }
    &.save{
        margin-left: 23px;
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px; 
        color: #FFFFFF;
    }
`