import styled from "styled-components"
import { Header } from "./style"
import logo from "../../assets/TrackIt.png"

export default function TopBar(){
    return(
        <Header>
            <img src={logo} alt="" className="siteLogo" />
            <img src="user" alt="" className="userProfile" />
        </Header>
    )
}

