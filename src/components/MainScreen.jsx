import React from "react";
import styled from "styled-components";
import "../App.css";
import SideBar from "./SideBar";
import SongCard from "./SongCard";
import Login from "./Login";
import RegisterForm from "./RegisterForm";

const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	color: #fff;

	margin-left: 250px;
	margin-top: 125px;
	width: calc(100vw - 250px);
	background-color: var(--color-principal-opaco);
	border-radius: 1rem;
	min-height: 100vh;
	overflow-y: auto;
	box-sizing: border-box;

	 @media (max-width: 900px) {
    margin-left: 0;
    margin-top: 90px;
    width: 100vw;
    border-radius: 0;
    padding: 0.5rem;
  }
  @media (max-width: 600px) {
    margin-top: 70px;
    padding: 0.2rem;
  }
`;
const SectionTitle = styled.h2`
	font-size: 1.5rem;
	color: var(--color-secundario);
	margin: 1rem 0;
	font-style: bold;
	margin-left: 1rem;
	padding-bottom: 0.5rem;
`;

const CarouselContainer = styled.div`
	display: flex;
	overflow-x: auto;
	gap: 1rem;
	padding: 0.5rem;
	margin: 0 0.5rem;
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

	@media (max-width: 600px) {
    gap: 0.5rem;
    padding: 0.2rem;
    margin: 0;
  }
`;

export default function MainScreen() {
	// Ejemplo de datos de canciones (Sin imagen)
	const songs = [
		{
			image: "https://via.placeholder.com/160",
			title: "Song",
			artist: "Artist",
		},
		{
			image: "https://via.placeholder.com/160",
			title: "Song",
			artist: "Artist",
		},
		{
			image: "https://via.placeholder.com/160",
			title: "Song",
			artist: "Artist",
		},
		{
			image: "https://via.placeholder.com/160",
			title: "Song",
			artist: "Artist",
		},
		{
			image: "https://via.placeholder.com/160",
			title: "Song",
			artist: "Artist",
		},
		{
			image: "https://via.placeholder.com/160",
			title: "Song",
			artist: "Artist",
		},
		{
			image: "https://via.placeholder.com/160",
			title: "Song",
			artist: "Artist",
		},
		{
			image: "https://via.placeholder.com/160",
			title: "Song",
			artist: "Artist",
		},
		{
			image: "https://via.placeholder.com/160",
			title: "Song",
			artist: "Artist",
		},
		// Agrega más canciones aquí
	];
	return (
		<>
			<SideBar></SideBar>
			<MainContainer>
				<SectionTitle>Recomendados</SectionTitle>
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
				<SectionTitle>Destacados</SectionTitle>
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
				<SectionTitle>Populares</SectionTitle>
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
