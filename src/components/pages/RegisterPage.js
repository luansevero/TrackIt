import styled from "styled-components"

import HomeLogo from "../register_login/HomePageLogo"
import RegisterForm from "../register_login/RegisterForm"

export default function HomePage(){
    return(
        <Main>
            <HomeLogo />
            <RegisterForm />
        </Main>
    )
}

const Main = styled.main`
    display:flex;
    flex-direction: column;
    background: #FFFFFF;
`
