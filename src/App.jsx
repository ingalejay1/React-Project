import {BrowserRouter, Routes, Route} from "react-router-dom";
import Form from "./pages/Form";
import Genera from "./pages/Genera";
import Info from "./pages/Info";
import Movies from "./pages/Movies";
import NotFound from "./pages/404";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/genera" element={<Genera />} />
      <Route path="/info" element={<Info />} />
      <Route path="/Movies" element={<Movies />} />
      <Route path="*" element= {<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
