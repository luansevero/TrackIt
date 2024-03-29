import axios from "axios"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"

import { ThreeDots } from "react-loader-spinner"
import TokenContext from "../../contexts/TokenContext"
import UserContext from "../../contexts/UserContext";

import { Container, Input, Button } from "./style"

export default function LoginForm() {
    const [isDisable, setIsDisable] = useState("active")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();
    console.log(formData)
    const { setToken, token } = useContext(TokenContext);
    const { setUser } = useContext(UserContext);

    function handleLogin(e){
        e.preventDefault();
        setIsDisable("disable");
        const promisse= axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", formData
        );
        promisse.then((res) => {
            setToken({
                headers:{
                    Authorization: `Bearer ` + res.data.token
                }
            })
            setIsDisable("active")
            setUser(res.data);
            navigate("/hoje");
        })
        promisse.catch(() => {
            alert("Email ou senha erradas");
            setIsDisable("active");

        })
    }

    function InputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    return (
        <Container className={isDisable}>
            <form onSubmit={handleLogin}>
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
                <Button type="submit">{
                    isDisable === "active"
                    ?   "Entrar" 
                    :   <ThreeDots
                            height="20"
                            width="70"
                            color="#FFFFFF"
                            ariaLabel='loading' 
                        />
                    }</Button>
            </form>
            <Link to={"/cadastro"}>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </Container>
    )
}
