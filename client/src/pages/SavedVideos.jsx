import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  padding: 0 20px;
`;

const SavedVideos = () => {
  const savedVideos = useSelector((state) => state.savedVideos.savedVideos);

  return (
    <>
      <Title>Saved Videos</Title>
      <Container>
        {savedVideos.map((video) => (
          <Card key={video._id} video={video} />
        ))}
        {savedVideos.length === 0 && (
          <div style={{ color: "gray", padding: "20px" }}>
            No saved videos yet. Click the + button on any video to save it for later.
          </div>
        )}
      </Container>
    </>
  );
};

export default SavedVideos; 