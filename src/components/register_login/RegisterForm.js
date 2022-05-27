import { Link } from "react-router-dom"
import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"

import { Container, Input, Button } from "./style"

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    console.log(formData)
    const navigate = useNavigate();

    function handleRegistration(e){
        e.preventDefault();

        const promisse = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", 
            formData
        );

        promisse.then((res) => {
            navigate("/")
        });

        promisse.catch((erro) => {alert("Registro não foi efetuado com sucesso")});
    }

    function InputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <form onSubmit={handleRegistration}>
                <Input
                    type="email"
                    id="emailInput"
                    placeholder="email"
                    value={formData.email}
                    name="email"
                    onChange={InputChange}
                />
                <Input
                    type="password"
                    id="passwordInput"
                    placeholder="senha"
                    value={formData.password}
                    name="password"
                    onChange={InputChange}
                />
                <Input
                    type="text"
                    id="usernameInput"
                    placeholder="nome"
                    value={formData.name}
                    name="name"
                    onChange={InputChange}
                />
                <Input
                    type="text"
                    id="userPicInput"
                    placeholder="foto"
                    value={formData.image}
                    name="image"
                    onChange={InputChange}
                />
                <Button type="submit">Cadastrar</Button>
            </form>
            <Link to={"/"}>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </Container>
    )
}