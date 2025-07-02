import React from "react";
import styled from "styled-components";
import { LuCirclePlus } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { LuLibraryBig } from "react-icons/lu";


const SidebarContainer = styled.aside`
  position: fixed;
  top: 90px; 
  left: 0;
  width: 220px;
  height: 100vh;
  background-color: var(--color-principal-opaco);
  border-right: 2px solid var(--color-secundario);
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  z-index: 100;
    @media (max-width: 900px) {
    display: none;
  }
`;
const StyledIcon = styled.span`
  font-size: 1.2rem;
  color: var(--color-secundario);
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
`;

const SidebarItem = styled.div`
  padding: 1rem 2rem;
  display: inline-block;
  cursor: pointer;
  font-size: 1.2rem;
  &:hover {
    background: var(--color-secundario-opaco);
  }
`;

export default function SideBar() {
  return (
     <SidebarContainer>
      <SidebarItem>
        <StyledIcon as={FaHome} />Inicio
      </SidebarItem>
      <SidebarItem>
        <StyledIcon as={FaSearch} />Buscar
      </SidebarItem>
      <SidebarItem>
        <StyledIcon as={LuCirclePlus} />Crear Lista
      </SidebarItem>
      <SidebarItem><StyledIcon as={LuLibraryBig}/>Biblioteca</SidebarItem>
    </SidebarContainer>
  );
}
