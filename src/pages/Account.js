import React, { useState } from "react";
import hostel_wallpaper from "../images/hostel-wallpaper.jpg";
import RegistrationForm from "../components/account-components/RegistrationForm";
import LoginForm from "../components/account-components/LoginForm";

function Login() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const imageStyles = {
    backgroundImage: `url(${hostel_wallpaper})`,
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
      <div style={imageStyles}>
        {isLoginVisible ? <LoginForm onLogin={toggleAppear} /> : <RegistrationForm onRegister={toggleAppear} />}
      </div>
    </div>
  );
}

export default Login;
