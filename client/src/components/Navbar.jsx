import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tooltip from "@mui/material/Tooltip";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Upload from "./Upload";
import Model from "./Model";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../img/logo.png";

const Container = styled.div`
  padding: 5px 0;
  width: 100vw;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  z-index: 100;

  @media (max-width: 480px) {
    height: 48px;
    padding: 0 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0px 20px;
  position: relative;
  font-size: 5px;

  @media (max-width: 480px) {
    font-size: 1px;
    padding: 0 10px;
  }
`;

const Search = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  width: 95%;
  ${
    "" /* position: absolute;
  left: 0px;
  right: 0px; */
  }
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 30px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 480px) {
    width: 50%;
    padding: 5px;
    margin-left: 100px;
  }
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 480px) {
    padding: 5px;
    font-size: 15px;
  }
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
  @media (max-width: 480px) {
    margin-right: -5px;
    font-size: 12px;
    padding: 2px;
    gap: 2px;
  }
`;

const SearchButton = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 10px;
  border-radius: 0 30px 30px 0;
  display: flex;

  padding-right: 20px;
  padding-left: 20px;
  @media (max-width: 480px) {
    width: 50%;
    padding: 5px;
  }
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
  @media (min-width: 480px) and (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const SVG = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 12px;
  border: 0.1px solid rgb(255, 255, 255, 0.05);
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  border-radius: 50%;
`;

const Item = styled.div`
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.theme};
  }
`;

const Logo = styled.div`
  width: 150px;
  @media (max-width: 480px) {
    width: 48px;
    height: 48px;
  }
`;

const Navbar = ({ handleToggle, darkMode }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const [openModal, setModel] = useState(false);
  const [voiceToText, setVoiceToText] = useState("");
  const [tooltipText, setTooltipText] = useState("Start Mic");
  let availableHits = 3;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    finalTranscript,
  } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      window.alert(`Your Browser doesn't supprt this feature.`);
    }
  }, [browserSupportsSpeechRecognition]);

  const handleMicButton = () => {
    if (!isMicrophoneAvailable) {
      if (availableHits) {
        const getLocalStream = () => {
          navigator.mediaDevices
            .getUserMedia({ video: false, audio: true })
            .then((stream) => {
              window.localStream = stream;
              window.localAudio.srcObject = stream;
              window.localAudio.autoplay = true;
            })
            .catch((err) => {
              console.error(`you got an error: ${err}`);
            });
        };

        getLocalStream();
        availableHits--;
      } else {
        return window.alert(`Allow Microphone Permission`);
      }
    }
    if (listening) {
      setQ(transcript);
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  useEffect(() => {
    if (listening) {
      setTooltipText("Stop Mic");
    } else {
      setTooltipText("Start Mic");
    }
  }, [listening]);

  return (
    <>
      <Container>
        <Wrapper>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Item>
              <MenuIcon onClick={() => handleToggle()} />
            </Item>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Logo
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <img src={logo} alt="logo" style={{ width: "30px" }} />
                <Item>
                  <h1 style={{ fontSize: "25px" }}>VideoTube</h1>
                </Item>
              </Logo>
            </Link>
          </div>

          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Search id="search-bar">
              <Input
                placeholder="Search"
                // bug: when start mic, already typed text in search bar gets removed.
                value={listening ? transcript : q}
                onChange={(e) => setQ(e.target.value)}
                onSelect={() => {
                  if (listening) {
                    setQ(transcript);
                    SpeechRecognition.stopListening();
                  }
                  document.getElementById(
                    "search-bar"
                  ).style.border = `2px solid ${({ theme }) => theme.text}`;
                  document.getElementById(
                    "search-btn"
                  ).style.borderLeft = `1px solid ${({ theme }) =>
                    theme.bgLighter}`;
                }}
              />

              <SearchButton id="search-btn">
                <SearchOutlinedIcon
                  onClick={() => navigate(`/search?q=${q}`)}
                />
              </SearchButton>
            </Search>

            <SVG
              style={{
                boxShadow: listening ? "0px 0px 6px 1px lightgreen" : "",
                border: listening
                  ? ""
                  : darkMode
                  ? "1px solid white"
                  : "1px solid black",
              }}
              onClick={handleMicButton}
            >
              <Tooltip title={tooltipText}>
                <svg
                  fill={listening ? "lightgreen" : darkMode ? "white" : ""}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  class="bi bi-mic-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                </svg>
              </Tooltip>
            </SVG>
          </div>

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
