import { Routes, Route } from "react-router-dom";
import About from "./pages/About_page/About";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact_page/Contact";

const Routerdefinition = () => {
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default Routerdefinition