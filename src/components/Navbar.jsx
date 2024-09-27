import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    navigateTo("/login");
    setShow(false);
    await axios
      .get("http://localhost:5000/api/user/logout", {
        withCredentials: true,
      })
      .then((res) => {
        if(res.data.message){
          toast.success(res.data.message);
          setIsAuthenticated(false);
          navigateTo("/login");
          // localStorage.removeItem("user");
        // console.log("token removed")
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <>
      <nav className={"container"}>
        <div className="logo">
          <Link to={"/"}>
            <img src="/logo.png" alt="logo" className="logo-img" />{" "}
          </Link>
        </div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            <Link to={"/"} onClick={() => setShow(false)}>
              <h6>Home</h6>
            </Link>
            <Link to={"/contact"} onClick={() => setShow(false)}>
              <h6>Contact</h6>
            </Link>
            <Link to={"/about"} onClick={() => setShow(false)}>
              <h6>About</h6>
            </Link>
          </div>
          <div className="usr-lgn-btn">
            {isAuthenticated ? (
              <>
                <button>{user.firstName}</button>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <button onClick={goToLogin}>LOGIN</button>
            )}
          </div>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
