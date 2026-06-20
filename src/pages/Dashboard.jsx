import Header from "../components/Header";
import "../styles/Dashboard.css";

function Dashboard() {

    return (

        <div>

            <Header/>

            <div className="dashboard-container">

                <h1>Amazon Connect CCP</h1>

                <h2>Welcome Agent</h2>

                <div className="contacts-card">
                    No Active Contacts
                </div>

            </div>

        </div>

    );

}

export default Dashboard;