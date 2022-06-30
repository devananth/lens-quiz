import { NavLink , useNavigate} from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { BsMoonFill } from "react-icons/bs";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="d-flex pb-1">
      <h2 className="cursor-ptr" onClick={() => navigate("/")}>Lens Quiz</h2>
      <nav className="d-flex align-center gap-2 ml-auto">
        <button className="nav__links">
          <BsMoonFill />
        </button>
        <NavLink to="/profile" className="nav__links">
          <BiUserCircle />
        </NavLink>
      </nav>
    </header>
  );
};

export { Header };
