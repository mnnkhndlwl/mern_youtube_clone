import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../config.js";
import LoadingSpinner from "../utils/spinner";
import { useDispatch, useSelector } from "react-redux";
import { saveVideo, unsaveVideo } from "../redux/savedVideosSlice";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display :  ${(props) => props.type === "sm" && "flex"};
  padding-left: 10px;
  @media (max-width: 480px) {
    width: 100vw;
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 3px 50px black;
  }
  @media (max-width: 480px) {
    height: 150px;
  }
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 6px;
    margin-top: 12px;
    margin-left: 20px;
  }
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
  @media only screen and (max-width: 480px) {
    display: block;
    margin-bottom: 8px;
  }
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: ${(props) => (props.type === "sm" ? "14px" : "16px")};
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-left:${(props) => props.type === "sm" && "25%" };
  @media only screen and (max-width: 480px) {
    font-size: 14px;
    margin-left: 0;
  }

`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
  margin-left:${(props) => props.type === "sm" && "25%"};
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-left: 0;
  }
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-left: ${(props) => props.type === "sm" && "25%"};
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    margin-left: 0;
  }
`;

const SaveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const savedVideos = useSelector((state) => state.savedVideos.savedVideos);
  const isSaved = savedVideos.some((savedVideo) => savedVideo._id === video._id);

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await publicRequest.get(`/api/users/find/${video.userId}`);
      setChannel(res.data);
      setLoading(false);
    };
    fetchChannel();
  }, [video.userId]);

  const handleSave = (e) => {
    e.preventDefault();
    if (isSaved) {
      dispatch(unsaveVideo(video._id));
    } else {
      dispatch(saveVideo(video));
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
            <Container type={type}>
              <Image type={type} src={video.imgUrl} />
              <SaveButton onClick={handleSave}>
                {isSaved ? "✓" : "+"}
              </SaveButton>
              <Details type={type}>
                <ChannelImage type={type} src={channel.img} />
                <Texts>
                  <Title>{video.title}</Title>
                  <ChannelName>{channel.name}</ChannelName>
                  <Info>
                    {video.views / 2} views • {format(video.createdAt)}
                  </Info>
                </Texts>
              </Details>
            </Container>
          </Link>
        </>
      )}
    </>
  );
};

export default Card;
