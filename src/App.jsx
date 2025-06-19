import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import "./App.css"; 

function App() {
  return (
    <Router>
     
        <TopBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Thêm các trang khác sau */}
          </Routes>
        </main>

      
    </Router>
  );
}

export default App;
