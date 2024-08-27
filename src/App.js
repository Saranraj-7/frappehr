import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Organisation from "./Pages/OrganisationSetup";
import Signup from "./Pages/Signup";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/organisation" element={<Organisation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
