import React, { useState } from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import Upload from "./Upload";
import Model from "./Model";

const Container = styled.div`
  padding-top: 5px;
  padding-bottom: 15px;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  background-color: #333;
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  border: 1px solid #ccc;
  border-radius: 30px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  font-size: 15px;
  border: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SearchButton = styled.div`
  background-color: #222;
  padding: 10px;
  border-radius: 0 30px 30px 0;
  padding-right: 30px;
  padding-left: 30px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`;

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const [openModal, setModel] = useState(false);

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder="Search"
              onChange={(e) => setQ(e.target.value)}
            />
            <SearchButton>
              <SearchOutlinedIcon onClick={() => navigate(`/search?q=${q}`)} />
            </SearchButton>
          </Search>
          {currentUser ? (
            <>
              <User onClick={() => setModel(!openModal)}>
                <VideoCallOutlinedIcon onClick={() => setOpen(true)} />
                <Avatar src={currentUser.img} />
                {currentUser.name}
              </User>
              {openModal && <Model />}
            </>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
