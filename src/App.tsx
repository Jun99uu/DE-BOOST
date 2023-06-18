import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Landing, Login, Search } from "./pages";
import { Global } from "@emotion/react";
import reset from "./styles/reset";
import { Frame } from "./components/common";
import About from "./pages/About";
import { Helmet } from "react-helmet-async";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <RecoilRoot>
      <Global styles={reset} />
      <Helmet>
        <title>DE:BOOST</title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Frame>
                <Landing />
              </Frame>
            }
          />
          <Route
            path="/login"
            element={
              <Frame>
                <Login />
              </Frame>
            }
          />
          <Route
            path="/search/:name"
            element={
              <Frame>
                <Search />
              </Frame>
            }
          />
          <Route
            path="/About"
            element={
              <Frame>
                <About />
              </Frame>
            }
          />
          <Route
            path="/*"
            element={
              <Frame>
                <NotFound />
              </Frame>
            }
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
