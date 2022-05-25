import styled from "styled-components";
import { useState } from "react"

export default function WeekCreator({ setDaysSelected, daysSelected, dayId, dayName }){
    function toggleDay(dayId){
        if((daysSelected.find((e) => e === dayId)) === undefined){
            setDaysSelected([...daysSelected, dayId]);
        } else {
            setDaysSelected(daysSelected.filter((e) => e !== dayId));
        }
    }

    return(
        <DayButtons
        dayId={dayId}
        dayName={dayName}
        daysSelected={daysSelected}
        onClick={() => toggleDay(dayId)}
        >
        {dayName[0].toUpperCase()}
        </DayButtons>
    )
}

export const DayButtons = styled.button`
    margin: 0 2px;
    width: 30px;
    height: 30px;
    background: #${props => ((props.daysSelected.find((e) => e === props.dayId)) === undefined) ? "FFFFFF" : "CFCFCF"};
    border: 1px solid #${props => ((props.daysSelected.find((e) => e === props.dayId)) === undefined) ? "D5D5D5" : "CFCFCF"};
    border-radius: 5px;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #${props => ((props.daysSelected.find((e) => e === props.dayId)) === undefined) ? "DBDBDB" : "FFFFFF"};
    :first-of-type{
        margin-left: 0px;
    }
    :last-of-type{
        margin-rigth: 0px;
    }
`