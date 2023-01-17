import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { userRequest } from "../config";
import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({ comment,viid }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const res = await userRequest.get(`/api/users/find/${comment.userId}`);
      setChannel(res.data);
    };
    fetchComment();
  }, [comment.userId]);

  const handleDelete = async () => {
    try {
      await userRequest.delete(`/api/comments/${comment._id}`);
      window.location.reload();
    } catch (error) {
      console.log(comment);
      console.log(error);
    }
  };

  return (
    <Container>
      <Avatar src={channel.img} />
      <Details>
        <Name>
          {channel.name} <Date>1 day ago</Date>
        </Name>
        <Text>{comment.desc}</Text>
        {
          currentUser?._id !== comment.userId ? <>

          </> : 
      <Button onClick={handleDelete}>
          <DeleteIcon />
      </Button>
        }
      </Details>
    </Container>
  );
};

export default Comment;
