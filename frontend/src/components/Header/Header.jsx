import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
    </div>
  );
}
