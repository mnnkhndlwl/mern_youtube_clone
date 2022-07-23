import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width : 360px;
  margin-bottom: 45px;
  cursor: pointer;
`

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  ${'' /* display: none; */}
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Container>
    <Image src="https://i.ytimg.com/vi/8uNeCwxlxn4/maxresdefault.jpg"/>
    <Details >
          <ChannelImage
            src="https://f4.bcbits.com/img/a0747725074_10.jpg"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Test Channel</ChannelName>
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
    </Container>
  )
}

export default Card