import "../styles/Header.css";
import { useState } from "react";
import { FaPhoneAlt, FaComments, FaCog } from "react-icons/fa";

function Header() {

    const agentName = localStorage.getItem("agentName") || "John Doe";

    const [status, setStatus] = useState("Available");

    const getStatusIcon = () => {
        switch (status) {
            case "Available":
                return "";
            case "Away":
                return "";
            case "Break":
                return "";
            default:
                return "";
        }
    };

    return (

        <header className="header">

            <div className="header-left">

                <span className="status-icon">
                    {getStatusIcon()}
                </span>

                <select
                    className="status-dropdown"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Available">Available</option>
                    <option value="Away">Away</option>
                    <option value="Break">Break</option>
                </select>

            </div>

            <div className="header-right">

                <FaPhoneAlt className="icon" />

                <FaComments className="icon" />

                <FaCog className="icon" />

                <div className="profile">
                    {agentName.charAt(0).toUpperCase()}
                </div>

                <span>{agentName}</span>

            </div>

        </header>

    );
}

export default Header;