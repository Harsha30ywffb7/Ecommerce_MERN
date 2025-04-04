import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(true);
  const handleSubmit = () => {
    console.log("button clicked");
    // condition
    navigate("/home");
  };

  const handleToggle = () => {
    setSignIn(!signIn);

    console.log("toggle button clicked");
  };
  return (
    <div
      style={{
        border: "1px solid",
        width: "300px",
        margin: "100px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: " #CADCFC",
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        User {!signIn ? "Signup" : "Login"}
      </h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        style={{
          borderRadius: "30px",
          padding: "10px 20px",
          margin: "10px ",
          marginLeft: "38px",
        }}
      />
      <br />
      {!signIn && (
        <>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            style={{
              borderRadius: "30px",
              padding: "10px 20px",
              margin: "10px",
            }}
          />
          <br />
        </>
      )}
      <label htmlFor="password">password:</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password"
        style={{ borderRadius: "30px", padding: "10px 20px", margin: "10px" }}
      />
      <br />
      <p style={{ fontSize: "15px", marginLeft: "5rem" }}>
        new user{" "}
        <span
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={() => handleToggle()}
        >
          {signIn ? "Signup" : "Login"}
        </span>
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#00246B",
            padding: "5px 10px",
            margin: "10px 0px",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
