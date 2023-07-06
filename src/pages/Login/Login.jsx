import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { loginUser } from "../../../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState("idle");

  const notLoggedMessage = useLoaderData();
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");
    console.log(loginFormData);
    loginUser(loginFormData)
      .then(() => navigate('/host', { replace: true }))
      .catch((error) => setError(error))
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className={styles.container}>
      <h2>Sign in to your account</h2>
      {notLoggedMessage && <h3>{notLoggedMessage}</h3>}
      {error && <h3 style={{color: 'red'}}>{error.message}</h3>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        {status === "submitting" ? (
          <button disabled style={{ backgroundColor: "grey" }}>
            Logging in
          </button>
        ) : (
          <button>Log in</button>
        )}
      </form>
    </div>
  );
}
