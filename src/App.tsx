import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Reducer from "./page/Reducer";
import ReducerWithContext from "./page/ReducerWithContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/reducer-with-context" element={<ReducerWithContext />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
