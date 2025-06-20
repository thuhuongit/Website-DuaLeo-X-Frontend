import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import HeaderMiddle from "./components/HeaderMiddle";
import Navbar from "./components/Navbar";
import Media from "./components/Media"; 
import Feekback from "./components/Feekback";
import Trademack from "./components/Trademack";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css"; 

function App() {
  return (
    <Router>
     
        <TopBar />
        <HeaderMiddle />
        <Navbar />

        
        {/* Nội dung chính */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Thêm các trang khác sau */}
          </Routes>
        </main>
        <Media />
        <Feekback />
        <Trademack />
        {/* Footer */}
      <Footer />
      
    </Router>
  );
}

export default App;
