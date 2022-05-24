import { Link } from "react-router-dom"
import { Container } from "./style"

export default function LoginForm() {
    return (
        <Container>
            <form onSubmit="Logando">
                <label for="emailInput"></label>
                <input type="email" id="emailInput" placeholder="email" value="userEmail" onChange={e => x}></input>
                <label for="passwordInput"></label>
                <input type="password" id="passwordInput" placeholder="senha" value="userPassword" onChange={e => x}></input>
                <button type="submit">Entrar</button>
            </form>
            <Link to={"/cadastro"}>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </Container>
    )
}
