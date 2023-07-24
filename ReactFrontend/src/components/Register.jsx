import { useState } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailId, setEmailId] = useState("");

  const registerUser = () => {
    axios
      .post("http://localhost:8081/auth/create-user", {
        userId: null,
        name: username,
        emailId: emailId,
        password: password,
        about: "",
      })
      .then((res) => {
        console.log("Created User : ", res);
        setUsername("");
        setEmailId("");
        setPassword("");
        throw redirect("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <label>username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <label>password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <label>emailId</label>
      <input
        type="text"
        value={emailId}
        onChange={(e) => {
          setEmailId(e.target.value);
        }}
      />

      <button onClick={registerUser}>register</button>
    </div>
  );
};

export default Register;
