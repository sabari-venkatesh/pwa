import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const menuItems = [
    {
      "name": "All",
      "param": "all"
    }, {
      "name": "Javascript",
      "param": "javascript"
    }, {
      name: 'Ruby',
      param: 'ruby',
    }, {
      name: 'Python',
      param: 'python',
    }, {
      name: 'Java',
      param: 'java',
    }
  ];
  return (
    <ul>
      {
        menuItems.map(({ name, param }) => (
          <li key={param}>
            <NavLink to={`/popular/${param}`}>{name}</NavLink>
          </li>
        ))
      }
    </ul>
  );
}