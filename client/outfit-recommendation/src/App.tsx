import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/outfit/LandingPage/Home";
import Outfit from "./components/outfit/Outfit";
import { useState } from "react";
import ProtectedRoutes from "./components/common/ProtectedRoutes";
import PopupModal from "./components/outfit/PopupModel";


const App = () =>{
  const [authenticated, setIsAuthenticated] = useState(false)
  return (
   <Router>
   <Routes>
   <Route element={<Home setIsAuthenticated={setIsAuthenticated}/>} path="/"/>
   <Route path="/outfit"  element={<ProtectedRoutes isAuthenticated={authenticated}>
<Outfit />
   </ProtectedRoutes>}/>
   {/* <Route path="/details" element={<PopupModal items={}/>} /> */}
   </Routes>
   </Router>
   
  
  )
}

export default App;
