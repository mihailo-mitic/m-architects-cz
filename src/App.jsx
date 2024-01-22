import "./App.css";
import LandingPage from "./pages/LandingPage";
import SingleProjectPage from "./pages/SingleProjectPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [projectData, setProjectData] = useState({
    name: "PROJECT NAME",
    images: [],
    brief: "brief description",
    year: "completion year",
    description: "",
    category: "",
  });

  const [contactToggle, setContactToggle] = useState(false);

  return (
    <AppContext.Provider
      value={{ projectData, setProjectData, contactToggle, setContactToggle }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/details' element={<SingleProjectPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
