import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BiLinkExternal } from "react-icons/bi";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=4w6Sg3GQcXjCaqqdNUHiAU4Abx5e8JAK`
      );

      setBooks(res.data.results.books);
      console.log(res.data.results.books);
    };
    getBooks();
  }, []);

  const bookElements = books.map((book) => {
    const {
      author,
      book_image,
      buy_links,
      description,
      primary_isbn10,
      publisher,
      rank,
      title,
    } = book;
    return (
      <div key={rank}>
        <Card className="bg-light text-black h-100">
          <Card.Img
            variant="top"
            src={book_image}
            alt={title}
            className="block mx-auto"
            height="300px"
          />
          <Card.Body>
            <Card.Title>
              <div>
                <h3 className=" my-2 ">{title}</h3>
              </div>
            </Card.Title>
            <div className="mb-4">
              <div>{description}</div>
              <div>
                <span className="fw-bold ">Author: </span>
                {author}
              </div>
            </div>
            <div className="mb-4 ml-0">
              <div>
                <span className="fw-bold ">Publisher: </span> {publisher}
              </div>
              <div>
                <span className="fw-bold ">ISBN: </span> {primary_isbn10}
              </div>
            </div>

            <div>
              <h3 className="fw-bold text-xl">Buy Now: </h3>
              {buy_links.map((link) => {
                const { name, url } = link;
                return (
                  <div key={name}>
                    <Card.Link
                      href={url}
                      className="flex items-center text-black text-decoration-none mx-3 "
                      target="_blank"
                      rel="noopenner noreferrer"
                    >
                      {name}
                      <BiLinkExternal className="ml-1" />
                    </Card.Link>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 mx-auto text-center">
              <Button variant="secondary" size="lg">
                Add to Favourites
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col>
            <h1 className="text-center fw-bolder fs-1  py-4 mt-5 ">
              My Bookshelf
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>{bookElements}</Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Books;
