

import TopBar from "../logged/TopBar"
import FooterNav from "../logged/FooterNav"
import check from "../../assets/Vector.png"

import styled from "styled-components"
import { Body, Main } from "../logged/style"

export default function TodayPage() {
    return (
        <Body>
            <TopBar />
            <Main>
                <Header>
                    <h1>Quarta, 25/05</h1>
                    <h2 dontmadeit="sim">Nenhum hábito concluído ainda</h2>
                </Header>
                <Habits>
                    <HabitsInfoContainer>
                        <h2>Ler 1 capítulo de livro</h2>
                        <p>Sequência atual: 3 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </HabitsInfoContainer>
                    <CheckList><img src={check} alt="checj" /></CheckList>
                </Habits>
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
