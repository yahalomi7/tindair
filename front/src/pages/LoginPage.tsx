import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function LoginPage() {


    return (
        <div className="login-container">
            <h1>Login</h1>

            <form className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    required
                />

                <button type="submit">Login</button>
            </form>

            <p className="register-text">
                Don’t have an account?
                <Link to="/register"> Register</Link>
            </p>
            <Navbar />
        </div>
    );
};

