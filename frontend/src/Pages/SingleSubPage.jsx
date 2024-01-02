import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

const SingleSubPage = () => {
  const [user, setUser] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3001/sub/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.sub);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  return (
    <Container>
      <h1>{user.name}</h1>
      <h3>{user.subscribedChannel}</h3>
    </Container>
  );
};

export default SingleSubPage;
