import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Landing, Login, Search } from "./pages";
import { Global } from "@emotion/react";
import reset from "./styles/reset";
import { Frame } from "./components/common";

function App() {
  return (
    <RecoilRoot>
      <Global styles={reset} />
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
            path="/search"
            element={
              <Frame>
                <Search />
              </Frame>
            }
          />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
