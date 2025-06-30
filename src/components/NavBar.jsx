import React from "react";
import "../App.css";
import styled from "styled-components";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPadding } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";

const NavContainer = styled.header`
	background-color: var(--color-principal-opaco);
	padding: 1rem 0.5rem;
	border-bottom: 2px solid var(--color-secundario);
	display: flex;
	justify-content: space-around;
	width: 100%;
	position: fixed;
	top: 0;
`;
const TitleHeader = styled.h1`
	display: inline-block;
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.5rem;
	color: var(--color-secundario);
	text-decoration: none;
	margin: 1rem;
`;
const HomeIcon = styled(FaHome)`
	font-size: 1.5rem;
	margin: 0.5rem;
	color: var(--color-secundario);
`;
const ItemNav = styled.li`
	display: inline-block;
	margin: 0 1rem;
	padding: 0.5rem;
	text-decoration: none;
	font-size:1rem;
	&:hover {
		background: var(--color-secundario-opaco);
		border-radius: 1rem;
	}
	
`;

const ItemSearch = styled.div`
	display: inline-block;
	margin: 0 1rem;
	padding: 0.5rem;
`;

const BtnRegister = styled.button`
	background-color: var(--color-secundario);
	color: var(--color-principal);
	border: none;
	border-radius: 1rem;
	/* padding: 1rem 1rem; */
	display: inline-block;
	margin: 0 1.5rem;
	text-decoration: none;

`;

const InputSearch = styled.input`
	padding: 0.5rem 5rem;
	background-color: var(--color-principal);
	border-radius: 1rem;
	border-color: var(--color-secundario-opaco);
`;

export default function NavBar() {
	return (
		<BrowserRouter>
			<NavContainer>
				<TitleHeader>Kodigo Music</TitleHeader>
				<nav>
					<ul>
						<ItemNav>
							<HomeIcon></HomeIcon>
						</ItemNav>
						<ItemSearch>
							
							<InputSearch></InputSearch>
						</ItemSearch>
						<ItemNav>
							<p>Premium</p>
						</ItemNav>
						<ItemNav>
							<p>Asistencia</p>
						</ItemNav>
						<ItemNav>
							<p>Descargar</p>
						</ItemNav>
						<ItemNav>
							<p>Iniciar Sesion</p>
						</ItemNav>
							<BtnRegister>
								Registrarse
							</BtnRegister>
					</ul>
				</nav>
			</NavContainer>
		</BrowserRouter>
	);
}
