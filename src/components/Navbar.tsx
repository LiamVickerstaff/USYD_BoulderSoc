import { Link } from "react-router-dom";
import JoinTodayBtn from "./Buttons/JoinTodayBtn";
import BoulderSocIcon from "/BoulderSoc_Icon.svg";

export default function Navbar() {
  return (
    <div className="navbar-container flex-space-between">
      <Link to="/">
        <img src={BoulderSocIcon} width={90} alt="BoulderSoc Logo" />
      </Link>
      <div className="flex-space-between gap-50">
        <Link className="nav-item-text" to="/about">
          About
        </Link>
        <Link className="nav-item-text" to="/membership">
          Membership
        </Link>
        <Link className="nav-item-text" to="/events">
          Events
        </Link>
        <JoinTodayBtn />
      </div>
    </div>
  );
}
