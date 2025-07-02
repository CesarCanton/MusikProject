import React, { useEffect, useState } from "react";
import "../App.css";
import styled from "styled-components";
import { Link} from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { FaHome } from "react-icons/fa";



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
	color: var(--color-secundario);
`;
const ItemNav = styled.li`
	display: inline-block;
	margin: 0 1rem;
	padding: 0.5rem;
	text-decoration: none;
	font-size: 1rem;
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
	display: inline-block;
	margin: 0 1.5rem;
	text-decoration: none;
	transition: background 0.2s;
	&:hover {
		background: var(--color-secundario-opaco, #ffffff8a);
	}
`;

const InputSearch = styled.input`
	padding: 0.5rem 5rem;
	background-color: var(--color-principal);
	border-radius: 1rem;
	border-color: var(--color-secundario-opaco);
`;

export default function NavBar() {
	 const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth);
    };

	return (
		<>
			<NavContainer>
				<TitleHeader>
					<Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
						Kodigo Music
					</Link>
				</TitleHeader>
				<nav>
					<ul>
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
						{!user && (
                            <>
                                <ItemNav>
                                    <Link
                                        to="/login"
                                        style={{ color: "inherit", textDecoration: "none" }}
                                    >
                                        Iniciar Sesion
                                    </Link>
                                </ItemNav>
                                <Link to="/register" style={{ textDecoration: "none" }}>
                                    <BtnRegister>Registrarse</BtnRegister>
                                </Link>
                            </>
                        )}
                        {user && (
							<>
                            <ItemNav>
                                <span style={{ color: "var(--color-secundario)" }}>
                                    {user.email}
                                </span>
								 </ItemNav>
                                <BtnRegister onClick={handleLogout} style={{ marginLeft: "1rem" }}>
                                    Cerrar sesión
                                </BtnRegister>
                           </>
                        )}
						
					</ul>
				</nav>
			</NavContainer>
			</>
	);
}
