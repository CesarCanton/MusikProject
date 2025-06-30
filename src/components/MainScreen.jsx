import React from "react";
import styled from "styled-components";
import "../App.css";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SongCard from "./SongCard";



const MainContainer = styled.main`
	display: flex;
  flex-direction: column;
	color: #fff;
	/* margin: 2.5rem; */
	/* gap: 1rem; */
	/* top: 80px; */
	margin-left: 250px;
	margin-top: 125px;
	width: calc(100vw - 250px);
	background-color: var(--color-principal-opaco);
	border-radius: 1rem;
	min-height: 100vh;
	overflow-y: auto;
	box-sizing: border-box;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding-bottom: 1rem;
  scrollbar-width: thin;
  scrollbar-color: var(--color-secundario-opaco) #ffffff12;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-secundario);
    border-radius: 4px;
  }
`;


export default function MainScreen() {
	  // Ejemplo de datos de canciones
  const songs = [
    {
      image: "https://via.placeholder.com/160",
      title: "Song",
      artist: "Artist"
    },
    {
      image: "https://via.placeholder.com/160",
      title: "Song",
      artist: "Artist"
    },
	{
      image: "https://via.placeholder.com/160",
      title: "Song",
      artist: "Artist"
    },
	{
      image: "https://via.placeholder.com/160",
      title: "Song",
      artist: "Artist"
    },
	{
      image: "https://via.placeholder.com/160",
      title: "Song",
      artist: "Artist"
    },
	{
      image: "https://via.placeholder.com/160",
      title: "Song",
      artist: "Artist"
    },
	{
      image: "https://via.placeholder.com/160",
      title: "Song",
      artist: "Artist"
    },
	{
      image: "https://via.placeholder.com/160",
      title: "Song",
      artist: "Artist"
    },
	{
      image: "https://via.placeholder.com/160",
      title: "Song",
      artist: "Artist"
    },
    // Agrega más canciones aquí
  ];
	return (
		<>
			<NavBar />
			<SideBar></SideBar>
			<MainContainer>
				<CarouselContainer>
				{songs.map((song, idx) => (
					<SongCard
						key={idx}
						image={song.image}
						title={song.title}
						artist={song.artist}
					/>
				))}
				</CarouselContainer>
				<CarouselContainer>
				{songs.map((song, idx) => (
					<SongCard
						key={idx}
						image={song.image}
						title={song.title}
						artist={song.artist}
					/>
				))}
				</CarouselContainer>
				<CarouselContainer>
				{songs.map((song, idx) => (
					<SongCard
						key={idx}
						image={song.image}
						title={song.title}
						artist={song.artist}
					/>
				))}
				</CarouselContainer>
			</MainContainer>
		</>
	);
}
