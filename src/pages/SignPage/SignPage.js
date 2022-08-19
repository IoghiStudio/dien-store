import React from "react";
import './SignPage.scss';

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignPage = () => (
  <div className="signpage">
    <SignIn />
    <SignUp />
  </div>
)

export default SignPage;