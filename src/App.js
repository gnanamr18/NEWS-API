import "./App.css";
import Header from "./components/Header";
import Homepage from "./screens/Homepage";
import Search from "./components/Search";
import Footer from "./components/Footer";
import Customsearchpage from "./screens/Customsearchpage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Search />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/custompage" element={<Customsearchpage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
