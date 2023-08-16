import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Page/Form.js";
import Axiostesting from "./components/Page/testAxios.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/axios" element={<Axiostesting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
