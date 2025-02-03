import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Reducer from "./page/Reducer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reducer" element={<Reducer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
