import { Link } from "react-router-dom"
import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"

import TokenContext from "../../contexts/TokenContext"

import { Container } from "./style"

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const navigate = useNavigate();

    function handleRegistration(e){
        const promisse = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", 
            formData
        );

        promisse.then(navigate("/"));
        promisse.catch(alert("Registro não foi efetuado com sucesso"))
    }

    function InputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <form onSubmit={handleRegistration}>
                <label for="emailInput"></label>
                <input
                    type="email"
                    id="emailInput"
                    placeholder="email"
                    value={formData.email}
                    name="email"
                    onChange={InputChange}>
                </input>
                <label for="passwordInput"></label>
                <input
                    type="password"
                    id="passwordInput"
                    placeholder="senha"
                    value={formData.password}
                    name="password"
                    onChange={InputChange}>
                </input>
                <label for="usernameInput"></label>
                <input
                    type="text"
                    id="usernameInput"
                    placeholder="nome"
                    value={formData.name}
                    name="name"
                    onChange={InputChange}>
                </input>
                <label for="userPicInput"></label>
                <input
                    type="text"
                    id="userPicInput"
                    placeholder="foto"
                    value={formData.image}
                    name="image"
                    onChange={InputChange}>
                </input>
                <button type="submit">Cadastrar</button>
            </form>
            <Link to={"/"}>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </Container>
    )
}