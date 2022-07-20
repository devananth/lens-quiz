import { NavLink, useNavigate } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { BsMoonFill, BsTrophyFill } from "react-icons/bs";
import "./header.css";
import { useAuth } from "../../contexts";

const Header = () => {
  const navigate = useNavigate();

  const {
    authState: { isUserLoggedIn },
  } = useAuth();

  return (
    <header className="d-flex pb-1">
      <h2 className="cursor-ptr" onClick={() => navigate("/")}>
        Lens Quiz
      </h2>
      <nav className="d-flex align-center gap-2 ml-auto">
        <button className="nav__links" onClick={() => navigate("/leaderboard")}>
          <BsTrophyFill />
        </button>
        <button className="nav__links">
          <BsMoonFill />
        </button>
        <NavLink
          to={isUserLoggedIn ? "/profile" : "/login"}
          className="nav__links"
        >
          <BiUserCircle />
        </NavLink>
      </nav>
    </header>
  );
};

export { Header };
