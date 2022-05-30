import { useContext } from "react"

import UserContext from "../../contexts/UserContext"

import { Header } from "./style"

import logo from "../../assets/logo.png"

export default function TopBar(){
    const { user } = useContext(UserContext)

    return(
        <Header>
            <img src={logo} alt="" className="siteLogo" />
            <img src={user.image} alt="" className="userProfile" />
        </Header>
    )
}

