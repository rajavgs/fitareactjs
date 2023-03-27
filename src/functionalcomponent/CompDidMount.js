import React, { useState, useEffect } from "react";

function CompDidMount() {
  const [users, setUsers] = useState([]);
  console.log("first", users);
  useEffect(() => {
    let responseData = [
      {
        id: 0,
        name: "abc",
      },
      {
        id: 1,
        name: "bcd",
      },
    ];
    setUsers(responseData);
  }, []);

  return <div>{users[0].name}</div>;
}

export default CompDidMount;
//class Componentdidmount
class Users extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    let responseData = [
      {
        id: 0,
        name: "abc",
      },
      {
        id: 1,
        name: "bcd",
      },
    ];
    this.setState({ users: responseData });
  }
}
