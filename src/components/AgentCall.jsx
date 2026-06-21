import { useState } from "react";
import {
    FaPhoneAlt,
    FaPhoneSlash,
    FaBackspace
} from "react-icons/fa";

import "../styles/AgentCall.css";

function AgentCall() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("IN");

    const formatNumber = (value, selectedCountry) => {

        const digits = value.replace(/\D/g, "");

        switch (selectedCountry) {

            case "IND":
                return digits.slice(0, 10);

            case "US":
                if (digits.length <= 3) return digits;

                if (digits.length <= 6) {
                    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
                }

                return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;

            case "UK":
                if (digits.length <= 5) return digits;
                return `${digits.slice(0, 5)} ${digits.slice(5, 11)}`;

            case "AU":
                if (digits.length <= 4) return digits;

                if (digits.length <= 7) {
                    return `${digits.slice(0, 4)} ${digits.slice(4)}`;
                }

                return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 10)}`;

            case "AE":
                return digits.slice(0, 9);

            case "SG":
                return digits.slice(0, 8);

            default:
                return digits;
        }
    };

    const addDigit = (digit) => {

        if (digit === "*" || digit === "#") {
            setPhoneNumber((prev) => prev + digit);
            return;
        }

        const rawDigits =
            phoneNumber.replace(/\D/g, "") + digit;

        setPhoneNumber(
            formatNumber(rawDigits, country)
        );
    };

    const clearLastDigit = () => {

        const rawDigits = phoneNumber.replace(/\D/g, "");

        const updatedDigits = rawDigits.slice(0, -1);

        setPhoneNumber(
            formatNumber(updatedDigits, country)
        );
    };

    const handleCall = () => {

        if (!phoneNumber) {
            alert("Please enter a phone number");
            return;
        }

        console.log("Calling:", phoneNumber);
    };

    const handleEndCall = () => {
        setPhoneNumber("");
    };

    return (

        <div className="agent-call-container">

            <div className="dialer-card">

                <h2>Agent Dialer</h2>

                <div className="input-section">

                    <select
                        className="country-select"
                        value={country}
                        onChange={(e) => {
                            setCountry(e.target.value);
                            setPhoneNumber("");
                        }}
                    >
                        <option value="IN">🇮🇳 India (+91)</option>
                        <option value="US">🇺🇸 United States (+1)</option>
                        <option value="UK">🇬🇧 United Kingdom (+44)</option>
                        <option value="AU">🇦🇺 Australia (+61)</option>
                        <option value="AE">🇦🇪 UAE (+971)</option>
                        <option value="SG">🇸🇬 Singapore (+65)</option>
                    </select>

                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) =>
                            setPhoneNumber(
                                formatNumber(
                                    e.target.value,
                                    country
                                )
                            )
                        }
                        placeholder="Enter phone number"
                        className="phone-input"
                    />

                </div>

                <div className="quick-connect-section">

                    <label>Quick Connect</label>

                    <select className="quick-connect">
                        <option>Select Quick Connect</option>
                        <option>Customer Support</option>
                        <option>Billing Team</option>
                        <option>Technical Team</option>
                        <option>Sales Team</option>
                    </select>

                </div>

                <div className="dialpad">

                    <button onClick={() => addDigit("1")}>1</button>

                    <button onClick={() => addDigit("2")}>
                        2
                        <span>ABC</span>
                    </button>

                    <button onClick={() => addDigit("3")}>
                        3
                        <span>DEF</span>
                    </button>

                    <button onClick={() => addDigit("4")}>
                        4
                        <span>GHI</span>
                    </button>

                    <button onClick={() => addDigit("5")}>
                        5
                        <span>JKL</span>
                    </button>

                    <button onClick={() => addDigit("6")}>
                        6
                        <span>MNO</span>
                    </button>

                    <button onClick={() => addDigit("7")}>
                        7
                        <span>PQRS</span>
                    </button>

                    <button onClick={() => addDigit("8")}>
                        8
                        <span>TUV</span>
                    </button>

                    <button onClick={() => addDigit("9")}>
                        9
                        <span>WXYZ</span>
                    </button>

                    <button onClick={() => addDigit("*")}>*</button>

                    <button onClick={() => addDigit("0")}>
                        0
                        <span>+</span>
                    </button>

                    <button onClick={() => addDigit("#")}>#</button>

                </div>

                <div className="call-actions">

                    <button
                        className="clear-btn"
                        onClick={clearLastDigit}
                        title="Backspace"
                    >
                        <FaBackspace />
                    </button>

                    <button
                        className="call-btn"
                        onClick={handleCall}
                        title="Call"
                    >
                        <FaPhoneAlt />
                    </button>

                    <button
                        className="end-btn"
                        onClick={handleEndCall}
                        title="End Call"
                    >
                        <FaPhoneSlash />
                    </button>

                </div>

            </div>

        </div>

    );
}

export default AgentCall;