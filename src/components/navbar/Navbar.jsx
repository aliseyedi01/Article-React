import styled from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styled.navbar}>
      <ul>
        <li>
          <Link to="/">Articles</Link>
        </li>
        <li>New</li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
