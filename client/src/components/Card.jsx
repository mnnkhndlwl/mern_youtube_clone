import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
import React, { useEffect, useState } from "react";
import { publicRequest } from "../config.js";
import LoadingSpinner from "../utils/spinner";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
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
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin-left: ${(props) => props.type === "sm" && "25%"};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
  margin-left: ${(props) => props.type === "sm" && "25%"};
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-left: ${(props) => props.type === "sm" && "25%"};
`;

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await publicRequest.get(`/api/users/find/${video.userId}`);
      setChannel(res.data);
      setLoading(false);
    };
    fetchChannel();
  }, [video.userId]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
            <Container type={type}>
              <Image type={type} src={video.imgUrl} />
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
