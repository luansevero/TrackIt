import styled from "styled-components";
import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import {Footer, NavButtons} from "./style"
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function FooterNav() {

    const { progress } = useContext(UserContext);

    return (
        <Footer>
            <Link to={"/habitos"}><NavButtons>Hábitos</NavButtons></Link>
            <Link to={"/hoje"}><NavButtons className="today"><CircularProgressbar text="Hoje" background value={progress} backgroundPadding={6} strokeWidth={9}/></NavButtons></Link>
            <Link to={"/historico"}><NavButtons>Histórico</NavButtons></Link>
        </Footer>
    )
}


