import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { dbStore } from "../firebase/appConfig";
import { Navigate, useNavigate } from "react-router-dom";




const RegisterContainer = styled.div`
	min-height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	background: var(--color-principal, #fff); /* Opcional, para ver el área */
	box-sizing: border-box;
`;

const RegisterFormContainer = styled.div`
	width: 420px;
	padding: 50px 50px;
	background: var(--color-principal-opaco, #fff);
	border-radius: 1rem;
	box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
	display: flex;
	flex-direction: column;
	align-items: center;
	& > h1 {
		margin: 0 0 1.5rem 0;
		text-align: center;
		font-size: 1.5rem;
	}
`;
const RegisterFormLayout = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;
const Input = styled.input`
	padding: 0.7rem 0.5rem;
	border-radius: 0.5rem;
	border: 1px solid var(--color-secundario, #ccc);
	font-size: 1rem;
`;

const Button = styled.button`
	padding: 0.7rem 1rem;
	border-radius: 0.5rem;
	border: none;
	background: var(--color-secundario, #222);
	color: var(--color-principal, #fff);
	font-size: 1rem;
	cursor: pointer;
	transition: background 0.2s;
	&:hover {
		background: var(--color-secundario-opaco, #444);
	}
`;

export default function RegisterForm() {
 const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
	const navigate = useNavigate();

	const handleSubmit =  (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        const auth = getAuth();
        try {
            createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Usuario creado exitosamente.");
			 setTimeout(() => {
                navigate("/login"); 
            }, 1000); 
        } catch (err) {
            setError(err.message);
        }
    };



 return (
        <RegisterContainer>
            <RegisterFormContainer>
                <h1>Registrarse</h1>
                <RegisterFormLayout onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit">Registrar</Button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    {success && <p style={{ color: "green" }}>{success}</p>}
                </RegisterFormLayout>
				<h5 style={{marginTop:"0.5rem"}}>¿Ya tienes una cuenta?</h5>
                    <Button
                    type="button"
                    style={{ background: "transparent", color: "var(--color-secundario)", border: "none", textDecoration: "underline" }}
                    onClick={() => navigate("/login")}
                >
                    Inicia sesion aqui
                </Button>
            </RegisterFormContainer>
        </RegisterContainer>
    );
}
