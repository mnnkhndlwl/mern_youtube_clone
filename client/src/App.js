import { darkTheme, lightTheme } from "./utils/Theme";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { useState, React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import { useSelector } from "react-redux";
// import { useSwipeable } from "react-swipeable";
import useNetworkStatus from "./utils/useNetworkStatus";
import Profile from "./pages/Profile";
import ReportIssueModal from "./components/ReportModal";
import SavedVideos from "./pages/SavedVideos";

const Container = styled.div`
  display: flex;

  @media (max-width: 480px) {
    overflow-x: hidden;
    justify-content: center;
    align-items: center;
  }
`;

// const SwipeContainer = styled.div`
//   ${
//     "" /* background-color: ${({ theme }) => theme.bg};
//  &.open {
//     display : none;
//   } */
//   }
// `;

const Main = styled.div`
  // flex: 7;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  /* padding:0;
  margin:0 */
`;

const Wrapper = styled.div`
  padding: 0;
  /* gap: 0; */
  padding: 22px 96px;
  @media (max-width: 480px) {
    padding: 0;
  }
`;

const NetworkStatus = styled.div`
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  padding: 28px;
  text-align: center;
  border-radius: 10px;
  color: #856404;
  font-weight: bold;
  margin: 10px;
  z-index: 10px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [openReportModal, setOpenReportModal] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // const swipeHandlers = useSwipeable({
  //   onSwipedLeft: handleToggle,
  //   onSwipedRight: handleToggle,
  // });

  const { currentUser } = useSelector((state) => state.user);
  const status = useNetworkStatus();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {status ? null : (
        <NetworkStatus>You are currently Offline !</NetworkStatus>
      )}
      <Container>
        <BrowserRouter>
          <Menu
            isOpen={isOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            setOpenReportModal={setOpenReportModal}
          />
          <Main>
            <Navbar handleToggle={handleToggle} darkMode={darkMode} />
            <Main>
              <Wrapper>
                <ReportIssueModal
                  openReportModal={openReportModal}
                  setOpenReportModal={setOpenReportModal}
                />
                <Routes>
                  <Route path="/">
                    <Route index element={<Home type="random" />} />
                    <Route
                      path="trends"
                      index
                      element={<Home type="trend" />}
                    />
                    <Route path="subscriptions" element={<Home type="sub" />} />
                    <Route path="settings" element={<Home type="settings" />} />
                    <Route path="search" element={<Search />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="saved" element={<SavedVideos />} />
                    <Route
                      path="signin"
                      element={currentUser ? <Home /> : <SignIn />}
                    />
                    <Route path="video">
                      <Route path=":id" element={<Video />} />
                    </Route>
                  </Route>
                </Routes>
              </Wrapper>
            </Main>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
