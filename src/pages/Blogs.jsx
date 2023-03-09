import { useState, useEffect } from "react";
import { Spinner, Input, Row, Button, Badge } from "reactstrap";
import BlogComponent from "../components/BlogComponent";
import "./Blogs.style.css";
function Blogs() {
  const [blogList, setBlogList] = useState(null);
  const [userList, setUserList] = useState(null);

  //variabile de stare filtrare
  const [textInput, setTextInput] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  //pasul de adaugare de date din API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((blogListAPI) => {
        setBlogList(blogListAPI);
      });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((userListAPI) => {
        setUserList(userListAPI);
      });
  }, []);

  return (
    <>
      {blogList && userList ? (
        <div className="d-flex flex-sm-column flex-lg-row">
          <div className="user_list m-4 d-flex flex-column">
            <h2>User List</h2>
            {userList.map((user, index) => {
              return (
                <Badge
                  pill
                  className="mt-2"
                  key={"user_" + index}
                  color={user.id === selectedUser ? "primary" : "secondary"}
                  onClick={() => {
                    setSelectedUser(user.id);
                  }}
                >
                  {user.id} -{user.name}
                </Badge>
              );
            })}
            <Button
              className="mt-2"
              color="danger"
              onClick={() => {
                setSelectedUser(null);
              }}
            >
              Clear Filter
            </Button>
          </div>
          <div className="blog_list">
            <Input
              className="w-25"
              value={textInput}
              onChange={(event) => {
                setTextInput(event.target.value);
              }}
            />
            <Row xs="1" md="5">
              {blogList
                .filter((blog) => {
                  return selectedUser === null || selectedUser === blog.userId; //daca nu avem niciun filtru, le afisam toate sau daca avem un user selectat, filtram dupa el
                })
                .filter((blog) => {
                  return (
                    blog.body.toLowerCase().includes(textInput.toLowerCase()) ||
                    blog.title.toLowerCase().includes(textInput.toLowerCase())
                  );
                })
                .map((blog, index) => {
                  return <BlogComponent blog={blog} key={"blog_" + index} />;
                })}
            </Row>
          </div>
        </div>
      ) : (
        <Spinner> Loading... </Spinner>
      )}
    </>
  );
}

export default Blogs;
