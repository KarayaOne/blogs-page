import "./App.css";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Blogpage from "./components/Blogpage";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
{
  /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/:id" element={<Blogpage />} />
  </Routes>
  <BrowseerRouter/>*/
}

function App() {
  return (
    <div className="main bg-gray-200">
      <Navbar />
      <Search />
      <div className="md:px-11 flex flex-wrap items-center justify-center blogs">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />
        <Blog />

        <Blog />
        <Blog />
      </div>
      <div className="m-2 page-nav flex justify-center">
        <button className="m-1 h-10 w-14 bg-gray-500 p-1 rounded-md text-white hover:bg-gray-700 transition">
          Prev
        </button>
        <button className="m-1 h-10 w-10 bg-blue-600 p-1 rounded-md text-white hover:bg-gray-700 transition">
          1
        </button>
        <button className="m-1 h-10 w-10 bg-gray-500 p-1 rounded-md text-white hover:bg-gray-700 transition">
          2
        </button>
        <button className="m-1 h-10 w-10 bg-gray-500 p-1 rounded-md text-white hover:bg-gray-700 transition">
          3
        </button>
        <button className="m-1 h-10 w-10 bg-gray-500 p-1 rounded-md text-white hover:bg-gray-700 transition">
          4
        </button>
        <button className="m-1 h-10 w-10 bg-gray-500 p-1 rounded-md text-white hover:bg-gray-700 transition">
          5
        </button>
        <button className="m-1 h-10 w-14 bg-gray-500 p-1 rounded-md text-white hover:bg-gray-700 transition">
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
