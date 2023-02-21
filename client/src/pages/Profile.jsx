import React, { useState } from 'react'

import styled from 'styled-components'
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
 const [name, setName] = useState('hello');
  const [email, setEmail] = useState("hello@gmail.com");
  const [avatar, setAvatar] = useState("");
  const [avatarPrev, setAvatarPrev] = useState('');

    const submitHandler = () => {
    
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

    )
}

export default Profile
