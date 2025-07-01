import React from "react";
import '../App.css';
import styled from "styled-components";

const LoginContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-principal, #fff); // Opcional, para ver el área
    box-sizing: border-box;
`;
const LoginFormContainer = styled.div`
    width: 420px;
    padding: 50px 50px;
    background: var(--color-principal-opaco, #fff);
    border-radius: 1rem;
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
     & > h1 {
        margin: 0 0 1.5rem 0;
        text-align: center;
        font-size: 1.5rem;
    }

`;

const LoginForm = styled.form`
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
export default function Login() {
    return (
        <LoginContainer>
            <LoginFormContainer>
                <h1>Iniciar Sesión</h1>
                <LoginForm>
                    <Input type="email" placeholder="Correo electrónico" required />
                    <Input type="password" placeholder="Contraseña" required />
                    <Button type="submit">Entrar</Button>
                </LoginForm>
            </LoginFormContainer>
        </LoginContainer>
    );
}
