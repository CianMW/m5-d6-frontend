import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
export default class NewBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: "",
        category: "",
        title: "",
        cover: "http://placeimg.com/640/480",
        author: {
          name: "",
        },
        readTime: {
          value: 2,
          unit: "minute",
      },
      photoCover: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({...this.state, text: value });
    console.log(this.state);
  }
  handleCategory(value) {
    this.setState({ ...this.state, category: value });
    console.log(this.state);
  }
  handleTitle(value) {
    this.setState({ ...this.state, title: value });
    console.log(this.state);
  }
  handleAuthor(value) {
    this.setState({ ...this.state, author: { name: value } });
    console.log(this.state);
  }

  target = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      this.setState({ ...this.state, photoCover: e.target.files[0] });
    }
  };

  postNewArticle = async (e) => {
    e.preventDefault();

    let articleObject = {
      text: this.state.text,
      category: this.state.category,
      title: this.state.title,
      cover: "http://placeimg.com/640/480",
      author: {
        name: this.state.name,
      },
      readTime: {
        value: 2,
        unit: "minute",
    },

    }
    try {
      const response = await fetch("http://localhost:3001/posts", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleObject),
      });
      if (response.ok) {
        let newData = response.json()
        
        console.log(response.json());
      }
    } catch (error) {
      console.log(error);
    }
  };


  coverPhotoFetch = (id) =>{
    let formData = new FormData();
    formData.append("post", this.state.coverPhoto)
 fetch(
      `http://localhost:3001/files/${id}/cover`,
      {
        method: "POST",
        body: formData,
      }
    );
  }

  render() {
    return (
      <Container className="new-blog-container">
        <Form className="mt-5">
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Title"
              value={this.state.title}
              onChange={(e) => this.handleTitle(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              size="lg"
              as="select"
              onChange={(e) => this.handleCategory(e.currentTarget.value)}
            >
              <option>Category1</option>
              <option>Category2</option>
              <option>Category3</option>
              <option>Category4</option>
              <option>Category5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange}
              className="new-blog-content"
            />
          </Form.Group>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Author Name</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Add the author's name here..."
              value={this.state.author.name}
              onChange={(e) => this.handleAuthor(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
              onClick={(e) => this.postNewArticle(e)}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>

        <Form>
          <Form.Group className="mb-3" controlId="#1">
            <Form.Control
              type="file"
              onChange={(e) => this.target(e)}
              rows={3}
              placeholder="What do you want to talk about?"
              // name="description"

              id="description"
              rows="4"
              cols="81"
            />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}