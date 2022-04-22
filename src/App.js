import "./App.css";
import { Routes, Route } from "react-router-dom";
//
import Footer from "./Components/Footer";
import { Home } from "./Components/Home";
import { Contactus } from "./Components/Contactus";
import About from "./Components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/about" element={<About />} />

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", height: "60vh" }}>
              <p>
                404 page. this page is either under construction or it doesn't
                exist.
              </p>
            </main>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
