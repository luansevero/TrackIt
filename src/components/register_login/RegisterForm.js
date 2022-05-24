import { Link } from "react-router-dom"
import { Container } from "./style"

export default function RegisterForm(){
    return (
        <Container>
            <form>
                <label></label>
                <input placeholder="email"></input>
                <label></label>
                <input placeholder="senha"></input>
                <label></label>
                <input placeholder="nome"></input>
                <label></label>
                <input placeholder="foto"></input>
                <button>Cadastrar</button>
            </form>
            <Link to={"/"}>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </Container>
    )
}