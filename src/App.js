import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Tahapan from "./components/tahapan/Tahapan";
import Favorit from "./components/favorit/Favorit";
import Berbagai from "./components/berbagai/Berbagai";
import Footer from "./components/footer/Footer";

import "./style.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Tahapan />
      <Favorit />
      <Berbagai />
      <Footer />
    </>
  );
}

export default App;
