import { useState } from "react";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import AgentCall from "../components/AgentCall";
import "../styles/Dashboard.css";

function Dashboard() {

    const [activeScreen, setActiveScreen] = useState("home");

    return (
        <div className="dashboard">

            <Header
                setActiveScreen={setActiveScreen}
                activeScreen={activeScreen}
            />

            <div className="dashboard-container">

                {activeScreen === "home" && (
                    <HomeContent />
                )}

                {activeScreen === "call" && (
                    <AgentCall />
                )}

            </div>

        </div>
    );
}

export default Dashboard;