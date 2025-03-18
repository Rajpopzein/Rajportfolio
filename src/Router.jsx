import { Routes, Route} from "react-router-dom";
import { Suspense, lazy } from "react";

const Routerdefinition = () => {
    const About = lazy(() => import("./pages/About_page/About"));
    const Dashboard = lazy(() => import("./pages/Dashboard"));
    const Contact = lazy(() => import("./pages/Contact_page/Contact"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
};

export default Routerdefinition;
