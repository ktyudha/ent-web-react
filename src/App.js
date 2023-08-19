import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Page/oprec/Form";
// import Axiostesting from "./components/Page/testAxios.js";
import LandingPage from "./components/Page/LandingPage";
import RequirementPage from "./components/Page/oprec/RequirementPage";
import SearchParticipant from "./components/Page/oprec/SearchParticipant";
import NotfoundPage from "./components/Page/found404";
import CekParticipant from "./components/Page/oprec/CekParticipant";
// import PDFTemplate from "./components/Common/PdfTemplateComp.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/requirement" element={<RequirementPage />} />
        <Route path="/registration" element={<Form />} />
        <Route path="/participant/:id" element={<SearchParticipant />} />
        <Route path="/participant" element={<CekParticipant />} />

        <Route path="/*" element={<NotfoundPage />} />
        <Route path="/requirement/*" element={<NotfoundPage />} />
        <Route path="/registration/*" element={<NotfoundPage />} />
        <Route path="/participant/*" element={<NotfoundPage />} />
        <Route path="/participant/:id/*" element={<NotfoundPage />} />
        {/* <Route path="/axios" element={<Axiostesting />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
