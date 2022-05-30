import { Link } from "react-router-dom"
import axios from "axios"
import {useState } from "react"
import { useNavigate } from "react-router"

import { Container, Input, Button } from "./style"
import { ThreeDots } from "react-loader-spinner"
export default function RegisterForm() {
    const [isDisable, setIsDisable] = useState("active")
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
        setIsDisable("disable")

        const promisse = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", 
            formData
        );

        promisse.then((res) => {
            setIsDisable("active")
            navigate("/")
        });

        promisse.catch((erro) => {
            alert("Registro não foi efetuado com sucesso")
            setIsDisable("active")
        });
    }

    function InputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    return (
        <Container className={isDisable}>
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
                <Button type="submit">{
                    isDisable === "active"
                    ?   "Cadastrar" 
                    :   <ThreeDots
                            height="20"
                            width="70"
                            color="#FFFFFF"
                            ariaLabel='loading' 
                        />
                    }</Button>
            </form>
            <Link to={"/"}>
                <span>Já tem uma conta? Faça login!</span>
            </Link>
        </Container>
    )
}