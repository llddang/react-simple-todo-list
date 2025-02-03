import { BrowserRouter, Route, Routes } from "react-router-dom";
import RTK from "./page/RTK";
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
        <Route path="/rtk" element={<RTK />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
