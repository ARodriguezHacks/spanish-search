import React, { useState } from "react";
import { auth, database } from "./firebase/firebase";
//import { actionCodeSettings } from "./firebase/firebase";

function SetPassword() {
  //const [password, setPassword] = useState("");
  //const [passwordRepeat, setPasswordRepeat] = useState("");
  //console.log(auth.currentUser);
  const [user, setUser] = useState({
    password: "",
    passwordRepeat: "",
  });
  const { password, passwordRepeat } = user;

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    console.log(value, name);

    setUser({
      ...user,
      [name]: value,
    });
    //setPasswordRepeat(passwordRepeat);
  };

  const handleSubmit = (e) => {
    console.log(auth.currentUser);
    e.preventDefault();
    console.log(user);
    // try {
    //   await auth.sendSignInLinkToEmail(email, actionCodeSettings);
    //   console.log("success");
    //   //setEmail("")
    // } catch (error) {
    //   console.log(error);
    // }

    // setPassword("");
    // setPasswordRepeat("");
    setUser({
      ...user,
      password: "",
      passwordRepeat: "",
    });
    //return "success";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="Enter password"
        onChange={handleChange}
      />
      <label htmlFor="passwordRepeat">Retype Password</label>
      <input
        type="password"
        id="passwordRepeat"
        name="passwordRepeat"
        value={passwordRepeat}
        placeholder="Retype password"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default SetPassword;
