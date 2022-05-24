import { Link } from "react-router-dom"

import styled from "styled-components"
import logo from "../../assets/trackit.jpeg"
import logoName from "../../assets/TrackIt.png"

export default function HomePage(){
    return(
        <Main>
            <Header>
                <img src={logo}/>
                <img src={logoName}/>
            </Header>
            <Section>
                <Container>
                    <form>
                        <label></label>
                        <input placeholder="email"></input>
                        <label></label>
                        <input placeholder="senha"></input>
                        <button>Entrar</button>
                    </form>
                    <Link to={"/cadastro"}>
                        <span>Não tem uma conta? Cadastre-se</span>
                    </Link>
                </Container>
            </Section>
        </Main>
    )
}

const Main = styled.main`
    display:flex;
    flex-direction: column;
`
const Header = styled.header`
    margin-top: 68px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img:first-of-type{
        width: 160px;
        heigth: 90px;
        margin-bottom: 10px;
    }
    img:last-of-type{
        width: 180px;
        heigth: 87px;
        margin-bottom: 30px;
    }
`
const Section = styled.section`

`
const Container = styled.div`
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
    input{
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
    }
    button{
        background: #52b6ff;
        margin-bottom: 0px;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
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
