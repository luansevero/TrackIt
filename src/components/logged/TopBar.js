import styled from "styled-components"
import logo from "../../assets/TrackIt.png"

export default function TopBar(){
    return(
        <Header>
            <img src={logo} alt="" className="siteLogo" />
            <img src="user" alt="" className="userProfile" />
        </Header>
    )
}

const Header = styled.header`
    display:flex;
    position: fixed;
    padding: 0 18px;
    align-items: center;
    justify-content: space-between;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    .siteLogo{
        width: 96px;
        height: 49px;
    }
    .userProfile{
        width: 51px;
        height: 51px;
    }
`