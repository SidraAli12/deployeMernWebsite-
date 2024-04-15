import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set initial value to false
  return (
    <> 
    
      <BrowserRouter>
   
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {isLoggedIn && (
              <Route
                path="signup/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
            )}
            <Route path="signup" element={<Signup />} />
            {isLoggedIn && (
              <Route path="signup/login/dashboard" element={<Dashboard />} />
            )}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
       
      </BrowserRouter>
      
    </>
  );
}

export default App;
