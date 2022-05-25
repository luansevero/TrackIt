import { Link } from "react-router-dom"


import TopBar from "../logged/TopBar"
import check from "../../assets/Vector.png"

import styled from "styled-components"

export default function TodayPage(){
    return(
        <Body>
            <TopBar />
            <Main>
                <Habits>
                    <HabitsInfoContainer>
                        <h2>Ler 1 capítulo de livro</h2>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitsInfoContainer>
                    <CheckList><img src={check} alt="checj" /></CheckList>
                </Habits>
            </Main>
            <FooterNav>
                <Link to={"/habitos"}><NavButtons>Histórico</NavButtons></Link>
                <Link to={"/hoje"}><NavButtons>Hoje</NavButtons></Link>
                <Link to={"/historico"}><NavButtons>Hábitos</NavButtons></Link>
            </FooterNav>
        </Body>
    )
}
const Body = styled.div`
    background: #F2F2F2;
    width: 100%;
    height: 100vh;
    header,
    footer{
        width: 100%;
        height: 70px;
    }
`
const Main = styled.main`
    display:flex;
    flex-direction: column;
    heigth: 100%;
    width: 100%;
    padding: 100px 18px;
`
const FooterNav = styled.footer`
    background: #FFFFFF;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 33px 0;
    left: 0;
    bottom: 0;
`
const NavButtons = styled.button`
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`
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
    h2,p{
        font-weight: 400;
        color: #666666;
    }
    h2{
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom: 7px;
    }
    p{
        font-size: 12.976px;
        line-height: 16px;
    }
`
const CheckList = styled.button`
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`
