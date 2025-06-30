import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  border: 1px solid var(--color-secundario-opaco);
`;

const SongImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 1rem;
  object-fit: cover;
  margin-bottom: 1rem;
  /* border: 2px solid var(--color-secundario-opaco); */
`;

const SongTitle = styled.h3`
  color: var(--color-secundario);
  margin: 0.5rem 0 0.2rem 0;
  font-size: 1.1rem;
  text-align: center;
`;

const ArtistName = styled.p`
  color: var(--color-secundario-opaco);
  margin: 0;
  font-size: 0.95rem;
  text-align: center;
`;

export default function SongCard({ image, title, artist }) {
  return (
    <Card>
      <SongImage src={image} alt={title} />
      <SongTitle>{title}</SongTitle>
      <ArtistName>{artist}</ArtistName>
    </Card>
  );
}