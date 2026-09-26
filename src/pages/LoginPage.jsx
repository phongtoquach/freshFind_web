import { Link } from "react-router-dom";
import "../assets/css/login.css";

function LoginPage({ signup = false }) {
  return (
    <main className="login-page">
      <h1>Welcome to FreshFind</h1>

      <div className="login-box">
        <h2>{signup ? "Create an account" : "Log in"}</h2>

        <form>
          {signup && (
            <div className="login-field">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>
          )}

          <div className="login-field">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="you@gmail.com" />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder={signup ? "Create a password" : "Enter your password"}
            />
          </div>

          <button type="button">{signup ? "Sign up" : "Log in"}</button>
        </form>

        <p>
          {signup ? "Already have an account? " : "Don't have an account? "}
          <Link to={signup ? "/login" : "/signup"}>
            {signup ? "Log in" : "Create an account"}
          </Link>
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
