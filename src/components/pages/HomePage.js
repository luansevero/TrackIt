import styled from "styled-components"

import HomeLogo from "../register_login/HomePageLogo"
import LoginForm from "../register_login/LoginForm"

export default function HomePage(){
    return(
        <Main>
            <HomeLogo />
            <LoginForm />
        </Main>
    )
}

const Main = styled.main`
    display:flex;
    flex-direction: column;
`
