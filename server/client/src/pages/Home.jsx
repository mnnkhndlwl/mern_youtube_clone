import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { axiosInstance } from '../config';

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap:wrap;
`;

const Home = ({type}) => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axiosInstance.get(`/api/videos/${type}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [type]);


  return (
    <Container>
   {videos.map((video) => (
    <Card key={video._id} video={video}/>
      ))}
    </Container>
  )
}

export default Home