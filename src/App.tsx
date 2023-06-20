import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Landing, Login, Search } from "./pages";
import { Global } from "@emotion/react";
import reset from "./styles/reset";
import { Frame } from "./components/common";
import About from "./pages/About";
import { Helmet } from "react-helmet-async";
import NotFound from "./pages/NotFound";
import { defaultData } from "./components/common/Seo";

function App() {
  const domain = "https://deboost.site/"; //대표 도메인
  return (
    <RecoilRoot>
      <Global styles={reset} />
      <Helmet>
        <title>DE:BOOST</title>
        <meta name="description" content={defaultData.description} />
        <meta name="keywords" content={defaultData.keywords.join(",")} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={defaultData.title} />
        <meta property="og:site_name" content={defaultData.title} />
        <meta property="og:description" content={defaultData.description} />
        <meta property="og:image" content={"og.png"} />
        <meta property="og:url" content={domain} />
        <meta name="twitter:title" content={defaultData.title} />
        <meta name="twitter:description" content={defaultData.description} />
        <meta name="twitter:image" content={"og.png"} />
        <link rel="canonical" href={domain} />
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
