import React, { useState } from "react";
import "../styles/SignUp.css"; // Make sure this CSS matches your design needs

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);

  const signupFn = async (event) => {
    event.preventDefault();
    setIsSigningUp(true);

    const api = "AIzaSyDHO9-l6UOCnT2HN7EdAJczOb3Se8LDTQY";
    const raw = JSON.stringify({
      email: email.trim(),
      password: password.trim(),
      returnSecureToken: true,
    });

    const requestOptions = {
      method: "POST",
      body: raw,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${api}`,
        requestOptions
      );
      const result = await response.json();

      if (result.idToken) {
        alert("Welcome To Behance 🥳");
        localStorage.setItem("idToken", result.idToken);
        window.location.href = "/login";
      } else {
        alert("Sign-up failed. Please try again.");
      }
    } catch (error) {
      console.error("Sign-up error", error);
    } finally {
      setIsSigningUp(false);
    }
  };

  return (
    <div className="sign-up-container">
      <div className="signin-left">
        <div className="left-content">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/glyph-neue/64/behance.png"
            alt="behance"
          />
          <p>
            Behance
          </p>
        </div>
      </div>
      <div className="sign-up-box">
        <h2>Create an account</h2>

        <div className="social-login">
          <button className="mv-social-btn google">
            <i className="fa-brands fa-google"></i>
          </button>
          <button className="mv-social-btn facebook">
            <i className="fa-brands fa-facebook"></i>
          </button>
          <button className="mv-social-btn apple">
            <i className="fa-brands fa-apple"></i>
          </button>
          <button className="mv-social-btn microsoft">
            <i className="fa-brands fa-windows"></i>
          </button>
          <button className="mv-social-btn line">
            <i className="fa-brands fa-line"></i>
          </button>
        </div>

        <div className="separator">Or</div>

        <p>
          Sign up with email <br />
          Already have an account? <a href="/login">Sign in</a>
        </p>

        <form onSubmit={signupFn}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />

          <button type="submit" className="continue-btn" disabled={isSigningUp}>
            {isSigningUp ? "Signing up..." : "Continue"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
