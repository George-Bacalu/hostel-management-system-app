import React, { useState, useEffect } from "react";
import hostel_wallpaper from "../images/hostel-wallpaper.jpg";
import MainNavigation from "../layout/MainNavigation";
import MainFooter from "../layout/MainFooter";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";

function Login() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const imageStyles = {
    backgroundImage: `url(${hostel_wallpaper})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "-30px 0",
  };

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // run once when the app component loads (like a dynamic if statement)
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS: ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  function toggleAppear() {
    setIsLoginVisible((prevState) => {
      return !prevState;
    });
  }

  return (
    <div>
      <MainNavigation />
      <div style={imageStyles}>
        {isLoginVisible ? <LoginForm onLogin={toggleAppear} /> : <RegistrationForm onRegister={toggleAppear} />}
      </div>
      <MainFooter />
    </div>
  );
}

export default Login;
