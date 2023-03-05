import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const Container = styled.div`
  padding: 20px 20px;
  position: fixed;
  top: 56px;
  z-index: 100;
  background-color: ${({ theme }) => theme.bgLighter};
  height: -webkit-fill-available;
  width: 200px;
  overflow-y: scroll;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 7.5px 20px;
  margin: 5px 0px;
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  gap: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;


const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode, isOpen }) => {
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
      localStorage.clear();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <Container>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Item>
                <HomeIcon />
                Home
              </Item>
            </Link>
            <Link
              to="trends"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Item>
                <ExploreOutlinedIcon />
                Explore
              </Item>
            </Link>
            <Link
              to="subscriptions"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Item>
                <SubscriptionsOutlinedIcon />
                Subscriptions
              </Item>
            </Link>
            <Hr />
            <Item>
              <VideoLibraryOutlinedIcon />
              Library
            </Item>
            <Item>
              <HistoryOutlinedIcon />
              History
            </Item>
            <Hr />
            {currentUser ? (
              <>
                <Button className="btn1" onClick={handleLogout}>
                  <ExitToAppIcon />
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Login className="signin">
                  <Item>Sign in to like videos, comment, and subscribe.</Item>
                  <Link to="signin" style={{ textDecoration: "none" }}>
                    <Button>
                      <AccountCircleOutlinedIcon />
                      SIGN IN
                    </Button>
                  </Link>
                </Login>
              </>
            )}
            <Hr />
            <Title>BEST Categories</Title>
            <Item>
              <LibraryMusicOutlinedIcon />
              Music
            </Item>
            <Item>
              <SportsBasketballOutlinedIcon />
              Sports
            </Item>
            <Item>
              <SportsEsportsOutlinedIcon />
              Gaming
            </Item>
            <Item>
              <MovieOutlinedIcon />
              Movies
            </Item>
            <Item>
              <ArticleOutlinedIcon />
              News
            </Item>
            <Item>
              <LiveTvOutlinedIcon />
              Live
            </Item>
            <Hr />
            <Link
              to="settings"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Item>
                <SettingsOutlinedIcon />
                your videos
              </Item>
            </Link>
            <Item>
              <FlagOutlinedIcon />
              Report
            </Item>
            <Item>
              <HelpOutlineOutlinedIcon />
              Help
            </Item>
            <Item onClick={() => setDarkMode(!darkMode)}>
              <SettingsBrightnessOutlinedIcon />
              {darkMode ? "Light" : "Dark"} Mode
            </Item>
        </Container>
      )}
    </>
  );
};

export default Menu;
