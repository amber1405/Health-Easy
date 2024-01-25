import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
function App() {
  return <>
  
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/sign-up" element={<SignUp/>}
        />
        <Route path="/sign-in" element={<Login/>}
        />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
