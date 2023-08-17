import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Page/oprec/Form.js";
import Axiostesting from "./components/Page/testAxios.js";
import LandingPage from "./components/Page/LandingPage";
import RequirementPage from "./components/Page/oprec/RequirementPage.js";
import SearchParticipant from "./components/Page/oprec/SearchParticipant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/requirement" element={<RequirementPage />} />
        <Route path="/oprec" element={<Form />} />
        <Route path="/requirement" element={<Form />} />
        <Route path="/participant" element={<SearchParticipant />} />
        <Route path="/axios" element={<Axiostesting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
