import React from "react";
import MainNavigation from "../layout/MainNavigation";
import MainFooter from "../layout/MainFooter";
import RegistrationForm from "../components/RegistrationForm";
//import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <div>
      <MainNavigation />
      <RegistrationForm />
      {/* <LoginForm /> */}
      <MainFooter />
    </div>
  );
}

export default Login;
