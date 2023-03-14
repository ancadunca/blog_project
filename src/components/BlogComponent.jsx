import { Card, CardBody, CardTitle, CardText, Button, Col } from "reactstrap";

function BlogComponent({ blog }) {
  const addToWishlist = () => {
    const blogsString = localStorage.getItem("blogs");

    if (blogsString !== null) {
      const blogs = JSON.parse(blogsString);

      const existNr = blogs.find((blogElement) => {
        return blogElement.id === blog.id;
      });

      if (existNr === undefined) {
        blogs.push(blog);
      }
      localStorage.setItem("blogs", JSON.stringify(blogs));
    } else {
      const newBlogs = [];
      newBlogs.push(blog); //in interiorul functiilor nu folosim useState sau alte hooks
      localStorage.setItem("blogs", JSON.stringify(newBlogs));
    }
  };

  return (
    <Col className="mt-4">
      <Card>
        <img
          alt="Sample"
          src={"https://picsum.photos/300/200?random=" + blog.id}
        />
        <CardBody>
          <CardTitle tag="h5">{blog.title}</CardTitle>
          <CardText>{blog.body}</CardText>
          <h6>{blog.userId}</h6>
          <Button
            onClick={() => {
              addToWishlist();
            }}
          >
            Add to favorites
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default BlogComponent;
