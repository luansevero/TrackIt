import { Link } from "react-router-dom"
import { Container } from "./style"

export default function LoginForm() {
    return (
        <Container>
            <form>
                <label></label>
                <input placeholder="email"></input>
                <label></label>
                <input placeholder="senha"></input>
                <button>Entrar</button>
            </form>
            <Link to={"/cadastro"}>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </Container>
    )
}
