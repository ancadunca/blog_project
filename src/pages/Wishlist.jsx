import { useEffect, useState } from "react";
import { Button } from "reactstrap";

function Wishlist() {
  //pasul 1 - preluam date din local storage cu useEffect
  //pasul 2 - cream o var de stare pt datele noastre
  const [wishlistBlogs, setWishlistBlogs] = useState([]);
  useEffect(() => {
    const blogsString = localStorage.getItem("blogs");
    if (blogsString !== null) {
      const blogs = JSON.parse(blogsString);
      setWishlistBlogs(blogs);
    }
  }, []);

  const onDelete = (blogId) => {
    const filteredBlogs = wishlistBlogs.filter((blog) => blog.id !== blogId);
    localStorage.setItem("blogs", JSON.stringify(filteredBlogs));
    setWishlistBlogs(filteredBlogs);
  };

  return (
    <>
      <h2>Wishlist page</h2>
      {/* //putem sa facem loading */}
      <ul>
        {wishlistBlogs.map((blog, index) => {
          return (
            <li key={"blog_" + index} className="mt-4">
              {blog.title}
              <Button
                color="danger"
                onClick={() => {
                  onDelete(blog.id);
                }}
              >
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Wishlist;
