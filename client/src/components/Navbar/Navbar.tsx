import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__logo">
<<<<<<< HEAD
        <Link to="/">
          <img src="https://slamdunkmerch.com/wp-content/uploads/2022/12/Slam-Dunk-Store_Logo.png" alt="Store Logo" />
        </Link>
=======
        <Link to="/"><img src="logo.png" alt="logo" /></Link>
>>>>>>> 5b92f08eb94cfb10720825902002a2050de9da31
      </div>
      <div className="navbar__account">
        {loggedIn() === false ? ( 
          <>
            <button onClick={() => navigate("/sign-up")}>Sign Up</button>
            <button onClick={() => navigate("/login")}>Login</button>
          </>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
