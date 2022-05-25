
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function FooterNav() {
    return (
        <Footer>
            <Link to={"/historico"}><NavButtons>Histórico</NavButtons></Link>
            <Link to={"/hoje"}><NavButtons className="today">Hoje</NavButtons></Link>
            <Link to={"/habitos"}><NavButtons>Hábitos</NavButtons></Link>
        </Footer>
    )
}

const Footer = styled.footer`
    background: #FFFFFF;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 33px;
    left: 0;
    bottom: 0;
    .today{
        height: 91px;
        border-radius: 100px;
        background: #52B6FF;
        margin-bottom: 45px;
        color: #FFFFFF;
    }
`
const NavButtons = styled.button`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    width: 91px;

`