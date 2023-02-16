import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { publicRequest, userRequest } from "../config";
import LoadingSpinner from "../utils/spinner";

const Container = styled.div`
display:grid;
grid-template-columns: repeat(3, auto);
 grid-gap: 2rem;

`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true)
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
      setLoading(false)
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {loading && <LoadingSpinner />}
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
