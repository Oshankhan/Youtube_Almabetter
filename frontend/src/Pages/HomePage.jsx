import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const HomePage = () => {
  const createUser = async () => {
    try {
      await axios.post(
        "https://youtube-alambetter.onrender.com/createSubs",
        userCredentail,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const [userCredentail, setUserCredentail] = useState({
    name: "",
    subscribedChannel: "",
  });
  const handleUserCred = (e) => {
    const { name, value } = e.target;
    setUserCredentail({
      ...userCredentail,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    createUser();

    setUserCredentail({
      name: "",
      subscribedChannel: "",
    });
  };

  return (
    <section className="my-4">
      <h4>Create User</h4>
      <h4>Enter User Credentails</h4>
      <Form onSubmit={handleSubmit} className="mx-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={userCredentail.name}
            onChange={handleUserCred}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Youtuber channel</Form.Label>
          <Form.Control
            placeholder="Youtuber channel"
            type="text"
            name="subscribedChannel"
            value={userCredentail.subscribedChannel}
            onChange={handleUserCred}
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default HomePage;
