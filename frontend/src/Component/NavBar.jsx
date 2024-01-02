import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  const [search, setSearch] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/subscribers")
      .then((res) => res.json())
      .then((data) => {
        setSuggestionList(data.subs);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const handleSearch = async (e) => {
    const newSearch = e.target.value;
    setSearch(newSearch);
    const newSearchSuggestion = suggestionList.filter((items) =>
      items.name.toLowerCase().includes(search.toLowerCase())
    );
    setSuggestionList(newSearchSuggestion);
    console.log(suggestionList);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary " data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/">Youtube</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Home
            </Link>

            <Link
              to="/allSubs"
              style={{ textDecoration: "none", color: "white" }}
            >
              All Subscriber
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
              value={search}
              onChange={handleSearch}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
