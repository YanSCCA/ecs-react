import { NavLink } from "react-router";
import AuthButton from "./AuthButton";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><AuthButton /></li>
        </ul>
      </nav>
    </header>
  );
}
