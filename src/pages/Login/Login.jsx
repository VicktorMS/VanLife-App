import React from "react";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import styles from "./Login.module.css";
import { loginUser } from "../../../api";
import { redirect } from "../../../redirectUtil";

export function loader({ request }) {
  let isLoggedIn = localStorage.getItem("loggedIn");    
  if (isLoggedIn) return redirect("/host");
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const emailData = formData.get("email");
  const passwordData = formData.get("password");

  const url = new URL(request.url).searchParams.get("redirectTo");

  try {
    const data = await loginUser({ email: emailData, password: passwordData });
    window.localStorage.setItem("loggedIn", true);
    return redirect(url);
  } catch (err) {
    return err.message;
  }
}

export default function Login() {
  //Getting URL message if user try enter host page not logged in
  const notLoggedMessage = useLoaderData();

  const errorMessage = useActionData();

  //Navigation state of an loader or action
  const navigation = useNavigation();

  return (
    <div className={styles.container}>
      <h2>Sign in to your account</h2>
      {notLoggedMessage && <h3>{notLoggedMessage}</h3>}
      {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}
      <Form replace method="post" className={styles.form}>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        {navigation.state !== "submitting" ? (
          <button>Log in</button>
        ) : (
          <button disabled style={{ backgroundColor: "grey" }}>
            Logging in...
          </button>
        )}
      </Form>
      <div style={{display: "flex",flexDirection: "column", alignItems: 'center', backgroundColor: "#fff", borderRadius: 5, padding: 16}}>
        <h3 style={{fontSize: 20}}>Hi friend! 👋</h3>
        <p>This is a demo version, you can use the credentials below to login.</p>
        <p><b>Email:</b> b@b.com</p>
        <p><b>Password:</b> p123</p>
      </div>
    </div>
  );
}
