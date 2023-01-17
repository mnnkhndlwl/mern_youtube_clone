import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { publicRequest, userRequest } from "../config";
import Comment from "./Comment";
const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;
const AddComment = styled.button`
  background-color: #87ceeb;
  font-weight: 500;
  color: white;
  border: none;
  justify-content: center;
  border-radius: 10px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await publicRequest.get(`/api/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {}
    };
    fetchComments();
  }, [videoId]);

  //TODO: ADD NEW COMMENT FUNCTIONALITY
  const fetchComments = async () => {
    try {
      const res = await publicRequest.get(`/api/comments/${videoId}`);
      setComments(res.data);
    } catch (err) {}
  };
  const handleComment = async () => {
    try {
      await userRequest.post(`/api/comments/`,{
        videoId : videoId,
        desc : newComment
      });
      fetchComments();
      setNewComment('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser?.img} />
        <Input
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <AddComment onClick={handleComment}>comment</AddComment>
      </NewComment>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} viid={videoId}/>
      ))}
    </Container>
  );
};

export default Comments;
