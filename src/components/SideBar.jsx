import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.aside`
  position: fixed;
  top: 100px; 
  left: 0;
  width: 220px;
  height: 100vh;
  background-color: var(--color-principal-opaco);
  border-right: 2px solid var(--color-secundario);
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  z-index: 100;
`;

const SidebarItem = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  &:hover {
    background: var(--color-secundario-opaco);
  }
`;

export default function SideBar() {
  return (
    <SidebarContainer>
      <SidebarItem>Inicio</SidebarItem>
      <SidebarItem>Buscar</SidebarItem>
      <SidebarItem>Tu Biblioteca</SidebarItem>
      <SidebarItem>Listas</SidebarItem>
    </SidebarContainer>
  );
}
