import React, { useEffect, useState } from "react";
import { User } from "./components/user";
import { AddUser } from "./components/adduser";
import "./app.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const onAdd = async (title, body) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setUsers((users) => [...users, data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const onEdit = async (id, title, body) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          id: id,
          title: title,
          body: body
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const updatedUsers = users.map((user) => {
        if (user.id === id) {
          user.title = title;
          user.body = body;
        }
        return user;
      });
      setUsers((users) => updatedUsers);
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setUsers(
        users.filter((user) => {
          return user.id !== id;
        })
      );
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="App">
      <h1>Users</h1>
      <AddUser onAdd={onAdd} />
      {users.map((user) => (
        <User
          id={user.id}
          key={user.id}
          title={user.title}
          body={user.body}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
