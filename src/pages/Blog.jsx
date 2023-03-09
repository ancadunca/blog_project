// componenta pentru fiecare blog separat

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Blog() {
  let { idBlog } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (blog === null || idBlog !== undefined) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${idBlog}`)
        .then((res) => res.json())
        .then((blogData) => {
          console.log(blogData);
          setBlog(blogData);
        });
    }
  }, [idBlog]);

  return (
    <>
      {blog !== null ? (
        <>
          <h1>{blog.title}</h1>
          <h2>{blog.body}</h2>
        </>
      ) : (
        <>Loading......</>
      )}
    </>
  );
}

export default Blog;
