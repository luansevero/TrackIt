import styled from "styled-components"

import logo from "../../assets/trackit.jpeg"
import logoName from "../../assets/TrackIt.png"

export default function HomeLogo(){
    return(
        <Section>
            <img src={logo} alt="TrackItLogo"/>
            <img src={logoName} alt="TrackIt"/>
        </Section>
    )
}

const Section = styled.section`
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