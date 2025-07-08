import "./App.css";

import { Route, Router, Routes } from "react-router-dom";

import AboutUsScreen from "./screens/AboutUsScreen";
import Footer from "./components/Footer";
import HeaderNavBar from "./components/HeaderNavBar";
import HomeScreen from "./screens/HomeScreen";
import OurProcessScreen from "./screens/OurProcessScreen";
import ServicesScreen from "./screens/ServicesScreen";

function App() {
  return (
    <>
      <HeaderNavBar />

      <div className=" w-full">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/AboutUs" element={<AboutUsScreen />} />
          <Route path="/OurProcess" element={<OurProcessScreen />} />
          <Route path="/Services" element={<ServicesScreen />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
