import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import HeaderMiddle from "./components/HeaderMiddle";
import Navbar from "./components/Navbar";
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

      <Footer />
      
    </Router>
  );
}

export default App;
