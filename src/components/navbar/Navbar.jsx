import styled from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styled.navbar}>
      <ul>
        <li>List of Article</li>
        <li>New Article</li>
        <li>About</li>
      </ul>
    </div>
  );
}

export default Navbar;
