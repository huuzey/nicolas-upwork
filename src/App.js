import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Takenomics from "./components/Takenomics";
import Team from "./components/Team";

export const BASE_URL = "https://react-web-design.onrender.com";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`${BASE_URL}/roadmap`} element={<Roadmap />} />
        <Route path={`${BASE_URL}/takenomics`} element={<Takenomics />} />
        <Route path={`${BASE_URL}/team`} element={<Team />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
