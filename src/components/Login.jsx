import "../styles/Login.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import agentIcon from "../assets/agent-icon.png";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // Demo Agent Credentials
    const agents = [
        {
            username: "agent1",
            password: "welcome123",
            name: "Agent One"
        },
        {
            username: "agent2",
            password: "welcome12345",
            name: "Agent Two"
        },
        {
            username: "admin",
            password: "admin123",
            name: "Administrator"
        }
    ];

    const handleLogin = () => {

        if (username.trim() === "") {
            alert("Please enter Username");
            return;
        }

        if (password.trim() === "") {
            alert("Please enter Password");
            return;
        }

        const agent = agents.find(
            (item) =>
                item.username === username &&
                item.password === password
        );

        if (agent) {

            localStorage.setItem("agentName", agent.name);
            localStorage.setItem("agentUsername", agent.username);

            navigate("/dashboard");

        } else {

            alert("Invalid Username or Password");

        }

    };

    return (

        <div className="container">

            <div className="login-card">

                <div className="logo">
                    <img
                        src={agentIcon}
                        alt="Agent Icon"
                        className="logo-image"
                    />
                </div>

                <h2>CCP Agent Login</h2>

                <p className="subtitle">
                    Login to access your Contact Control Panel
                </p>

                <div className="input-group">

                    <label>Username</label>

                    <input
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                handleLogin();
                            }
                        }}
                    />

                </div>

                <div className="input-group">

                    <label>Password</label>

                    <div className="password-box">

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleLogin();
                                }
                            }}
                        />

                        <span
                            className="eye-icon"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>

                    </div>

                </div>

                <div className="options">

                    <div className="remember">

                        <div className="remember-left">
                            <input type="checkbox" />
                            <span>Remember Me</span>
                        </div>

                        <span
                            className="forgot-password"
                            onClick={() => navigate("/forgot-password")}
                        >
                            Forgot Password?
                        </span>

                    </div>

                </div>

                <button
                    className="login-btn"
                    onClick={handleLogin}
                >
                    Login
                </button>

            </div>

            <div className="footer">
                © 2026 Custom CCP Dashboard
            </div>

        </div>

    );
}

export default Login;