import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Elements/Nav";
import LazyLoading from "./components/loading/LazyLoading";
import Footer from "./components/Elements/Footer";

const Home = lazy(() => import("./components/pages/Home"));
const About = lazy(() => import("./components/pages/About"));
const Dashboard = lazy(() => import("./components/pages/Dashboard"));


const App = () => {
  return (
    <div>
      <Nav />

      <Suspense fallback={<LazyLoading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
      
      <Footer/>
    </div>
  );
};

export default App;
