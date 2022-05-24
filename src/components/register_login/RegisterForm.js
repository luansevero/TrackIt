import { Link } from "react-router-dom"
import { Container } from "./style"
import { useContext } from "react"

import TokenContext from "../../contexts/TokenContext"

export default function RegisterForm() {

    return (
        <Container>
            <form onSubmit="Registrado">
                <label for="emailInput"></label>
                <input
                    type="email"
                    id="emailInput"
                    placeholder="email"
                    value="userEmail"
                    onChange={e => x}>
                </input>
                <label for="passwordInput"></label>
                <input
                    type="password"
                    id="passwordInput"
                    placeholder="senha"
                    value="userPassword"
                    onChange={e => x}>
                </input>
                <label for="usernameInput"></label>
                <input
                    type="text"
                    id="usernameInput"
                    placeholder="nome"
                    value="username"
                    onChange={e => x}>
                </input>
                <label for="userPicInput"></label>
                <input
                    type="image"
                    id="userPicInput"
                    placeholder="foto"
                    value="userPic"
                    onChange={e => x}>
                </input>
                <button type="submit">Cadastrar</button>
            </form>
            <Link to={"/"}>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </Container>
    )
}