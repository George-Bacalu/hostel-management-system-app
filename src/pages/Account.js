import React, { useState } from "react";
import hostel_background from "../images/hostel-background.png";
import MainNavigation from "../layout/MainNavigation";
import MainFooter from "../layout/MainFooter";
import RegistrationForm from "../components/RegistrationForm";
import LoginForm from "../components/LoginForm";
import "./Account.css";

function Login() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const imageStyles = {
    backgroundImage: `url(${hostel_background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "-30px 0",
  };

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
