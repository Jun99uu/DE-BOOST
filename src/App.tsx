import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Landing, Login, Search } from "./pages";
import { Global } from "@emotion/react";
import reset from "./styles/reset";

function App() {
  return (
    <RecoilRoot>
      <Global styles={reset} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
