import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import Navigation from "./components/Navigation";
import Blog from "./pages/Blog";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/blog/:idBlog" element={<Blog />} />
        {/* https://jsonplaceholder.typicode.com/posts/1/comments
        https://jsonplaceholder.typicode.com/guide/ */}
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
      {/* Footer */}
    </div>
  );
}

export default App;
