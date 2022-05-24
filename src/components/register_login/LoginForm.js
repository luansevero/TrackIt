import axios from "axios"
import { Link } from "react-router-dom"
import { Container } from "./style"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"

import TokenContext from "../../contexts/TokenContext"
import UserContext from "../../contexts/UserContext";


export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { setToken } = useContext(TokenContext);
    const { setUser } = useContext(UserContext);

    function handleLogin(e){
        const promisse= axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
            {
                email: email,
                password: password
            }
        );
        
        promisse.then((res) => {
            setToken(res.data.token);
            setUser(res.data);
            navigate("/hoje");
        })
        promisse.catch(alert("Email ou senha erradas"))
    }

    return (
        <Container>
            <form onSubmit={handleLogin}>
                <label for="emailInput"></label>
                <input 
                    type="email"
                    id="emailInput"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}>
                </input>
                <label for="passwordInput"></label>
                <input
                    type="password"
                    id="passwordInput"
                    placeholder="senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}>
                </input>
                <button type="submit">Entrar</button>
            </form>
            <Link to={"/cadastro"}>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </Container>
    )
}
