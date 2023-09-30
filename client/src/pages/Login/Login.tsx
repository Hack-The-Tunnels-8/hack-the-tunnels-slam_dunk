import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const message = await login("admin@email.com", "password");
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <label htmlFor="Email">Email:</label>
        <br />
        <input type="Email" name="email" id="emal" />
        <br />
        <label htmlFor="Password">Password:</label>
        <br />
        <input type="Password" name="password" id="password" />
        <br />  
        <button onClick={() => attemptLogin()}>
          Login
        </button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default Login;
