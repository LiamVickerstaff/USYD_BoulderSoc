import { Link } from "react-router-dom";
import JoinTodayBtn from "../Buttons/JoinTodayBtn";
import BouldeSocLogo from "/BoulderSoc_Navbar_Logo (1).svg";

export default function Navbar() {
  return (
    <div className="flex-space-between">
      <Link to="/">
        <img src={BouldeSocLogo} width={130} alt="BoulderSoc Logo" />
      </Link>
      <div className="container-links">
        <Link to="/about">About</Link>
        <Link to="/membership">Memberhsip</Link>
        <Link to="/events">Events</Link>
        <JoinTodayBtn />
      </div>
    </div>
  );
}
