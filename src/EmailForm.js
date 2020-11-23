import React, { useState } from "react";
import { auth } from "./firebase/firebase";
import { actionCodeSettings } from "./firebase/firebase";

function EmailForm() {
  const [email, setEmail] = useState("");
  //const [user, setUser] = useState("")

  const handleChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    //console.log(value);
    setEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      await auth.sendSignInLinkToEmail(email, actionCodeSettings);
      console.log("success");
      //setEmail("")
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    //return "success";
  };

  // const checkHandleSubmitFn = async (e) => {
  //   e.preventDefault();
  //   const result = await handleSubmit();
  //   console.log(result);
  //   //result.then((res) => console.log(res));
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        placeholder="Enter email"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default EmailForm;
