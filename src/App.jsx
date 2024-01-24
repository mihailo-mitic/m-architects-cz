import "./App.css";
import LandingPage from "./pages/LandingPage";
import SingleProjectPage from "./pages/SingleProjectPage";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [projectData, setProjectData] = useState({
    name: "Ing. arch. Mihailo Mitić",
    images: [],
    brief: "licensed architect no. 04 212",
    year: "mihailo@m-architects.cz  |  +381 64 992 7428",
    description: "",
    category: "",
  });

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <AppContext.Provider
      value={{ projectData, setProjectData, modalVisible, setModalVisible }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/details' element={<SingleProjectPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
