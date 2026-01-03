import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function RegistrationPage() {
    return (
      <div className="login-container">
      <h1>Register</h1>

      <form className="login-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />

        <button type="submit">Create Account</button>
      </form>

      <p className="register-text">
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>
      <Navbar  />
    </div>
    )
}