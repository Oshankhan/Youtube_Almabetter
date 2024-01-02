import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const AllSubs = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://youtube-alambetter.onrender.com/subscribers")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="my-4">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Subscriber Channel</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.subs.map((val, index) => (
              <tr key={val._id}>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/all/${val._id}`}
                  >
                    {index}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/all/${val._id}`}
                  >
                    {val.name}
                  </Link>
                </td>
                <td>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/all/${val._id}`}
                  >
                    {val.subscribedChannel}
                  </Link>
                </td>
                <td>{formatDate(val.subscribedDate)}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </section>
  );
};

export default AllSubs;
