import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import { publicRequest } from "../config";
import LoadingSpinner from "../utils/spinsearch";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search;
  const [load,setload]=useState(true);
  useEffect(() => {
    const fetchVideos = async () => {
      const res = await publicRequest.get(`/api/videos/search${query}`);
      setVideos(res.data);
      setload(false);
    };
    fetchVideos();
  }, [query]);

  return <Container>
    {load && <LoadingSpinner/> };
    {videos.map(video=>(
      <Card key={video._id} video={video}/>
    ))}
  </Container>;
};

export default Search;