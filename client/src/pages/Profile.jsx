import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { userRequest } from '../config';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateStart, updateFailure, updateSuccess } from "../redux/userSlice";
import { unstable_batchedUpdates } from 'react-dom';

const API_KEY = `6d207e02198a847aa98d0a2a901485a5`;
const REQ_URL = `https://freeimage.host/api/1/upload`;

const ProfileModel = styled.div`
 height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  min-width:200px;
 

`
const UpdateProfile = styled.form`
 background-color: #5E5E5E ;
  width: 40%;
  color:#fff;
  background-color: ${({ theme }) => theme.bgLighter};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Inputs = styled.input`
 box-sizing: border-box;
  padding: 1vmax 2vmax;
  width: 80%;
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin: 2vmax;
  font: 100 1.2rem "Roboto", sans-serif;
  outline: none;
color:#fff
`
const Title = styled.h3`
padding:2vmax;
`
const Avatar = styled.img`
height:10vmax;
width:10vmax;
border-radius:50%;

`
const Button = styled.button`
 border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser ? currentUser._id : "";

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [avatarPrev, setAvatarPrev] = useState('');
  const [error, setError] = useState('');


  window.onload = () => {
    if (!userId) navigate('/')
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userResp = await userRequest.get(`/api/users/find/${userId}`);
        setName(userResp.data['name']);
        setEmail(userResp.data['email']);
        setAvatarPrev(userResp.data['img']);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserInfo();
  }, [userId]);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(updateStart());
    try {
      const res = await userRequest.put(`/api/users/${userId}`, {
        id: userId,
        name: name,
        email: email,
        // img: avatar,
      });
      console.log(res);
      dispatch(updateSuccess(res.data));
    } catch (err) {
      console.log(error);
      setError(error);
      dispatch(updateFailure());
    } finally {
      // window.location.reload();
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatarPrev(Reader.result);
        setAvatar(Reader.result);
      }
    };
  };
  
  return (

    <ProfileModel>
        <UpdateProfile onSubmit={submitHandler}>

          <Title>
            Update Profile
          </Title>

          <Avatar
            src={avatarPrev}
            alt="User"
          />

          <Inputs type="file" accept="image/*" onChange={handleImageChange} />

          <Inputs
            type="text"
            value={name}
            placeholder="Name"
            className="updateProfileInputs"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <Inputs
            type="email"
            placeholder="Email"
            className="updateProfileInputs"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button type="submit">
            Submit
          </Button>

        </UpdateProfile>
    </ProfileModel>

    );
}

export default Profile
