import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    widht: 100%;
    form{
        width: 303px;
    }
    button,
    input{
        margin: 3px 0;
        width: 100%;
        height: 45px;
        border-radius: 5px;
    }
    a{
        margin-top: 25px;
    }
    span{
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`
export const Input = styled.input`
    height: 45px;
    border-radius: 5px;
    padding-left: 11px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    :first-of-type{
        margin-top: 0px;
    }
    ::placeholder{
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
    }
`
export const Button = styled.button`
    background: #52b6ff;
    margin-bottom: 0px;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`

