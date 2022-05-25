import styled from "styled-components";

import { DayButtons } from "../../logged/WeekCreator";

export default function AllHabits({setAllHabits, allHabits}) {
    const days = ["d","s","t","q","q","s","s"];

    function deleteHabit(habitId){
        if(window.confirm(`Tem certeza que deseja excluir esse hábito?`)){
            const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`, token);
            promisse.then( () => {
                const reload = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", token)

                reload.then(setAllHabits())
            }
            )
        }
    }

    return (
        <Section>
            {allHabits.map((habits) => {
               return( <HabitCard key={habits.id}>
                    <Left>
                        <h2>{habits.name}</h2>
                        {days.map((e, index) => {
                            return(
                            <DayButtons
                                dayId={index}
                                daysSelected={habits.days}
                            >
                                {e[0].toUpperCase()}
                            </DayButtons>
                            )
                        })}
                    </Left>
                    <Right>
                        <button onClick={() => deleteHabit(habits.id)}>X</button>
                    </Right>
                </HabitCard>
               )
            })}
        </Section>

    )
}
const Section = styled.section`
    margin-top: 20px;
`
const HabitCard = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
    min-height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 13px 15px;
    :last-of-type{
        margin-bottom: 0px;
    }
`
const Left = styled.div`
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    h2{
        margin-bottom: 10px;
    }
`
const Right = styled.div`

    button{
        width: 10px;
        height: 10px;
        background-color:red;
    }
    button:hover{
        outline: none;
    }
`
