import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { publicRequest, userRequest } from "../config";

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap:wrap; 
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      if (type === "sub") {
        const res = await userRequest.get(`/api/videos/${type}`);
        setVideos(res.data);
      } else if (type === "settings") {
        const res = await userRequest.get(`/api/videos/${type}`);
        setVideos(res.data);
      } else {
        const res = await publicRequest.get(`/api/videos/${type}`);
        setVideos(res.data);
      }
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
