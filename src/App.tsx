import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter></BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
