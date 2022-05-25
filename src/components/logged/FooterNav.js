
import { Link } from "react-router-dom"

import {Footer, NavButtons} from "./style"

export default function FooterNav() {
    return (
        <Footer>
            <Link to={"/historico"}><NavButtons>Histórico</NavButtons></Link>
            <Link to={"/hoje"}><NavButtons className="today">Hoje</NavButtons></Link>
            <Link to={"/habitos"}><NavButtons>Hábitos</NavButtons></Link>
        </Footer>
    )
}

