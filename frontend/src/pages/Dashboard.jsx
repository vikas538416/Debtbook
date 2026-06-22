import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";
import AlertCard from "../components/AlertCard";
import DebtorCard from "../components/DebtorCard";

import AddPerson from "./AddPerson";
import PeopleList from "./PeopleList";

function Dashboard() {
    const [summary, setSummary] = useState(null);
    const [alerts, setAlerts] = useState([]);
    const [debtors, setDebtors] = useState([]);
    useEffect(() => {

    const [summary, setSummary] = useState(null);

    const [alerts, setAlerts] = useState([]);

    const [debtors, setDebtors] = useState([]);

    useEffect(() => {

        fetch(
            `${import.meta.env.VITE_API_URL}/dashboard-summary`
        )
            .then(response => response.json())
            .then(data => setSummary(data));

        fetch(
            "http://127.0.0.1:5000/dashboard-alerts"
        )
            .then(response => response.json())
            .then(data => setAlerts(data));

        fetch(
            "http://127.0.0.1:5000/top-debtors"
        )
            .then(response => response.json())
            .then(data => setDebtors(data));
    }, []);
    return (
        <div><Navbar />
            <h1> DebtBook Dashboard</h1>
            <div><SummaryCard title="People"
                    value={summary ? summary.people : 0}/>
                <SummaryCard title="Borrowed"
                    value={summary ? summary.borrow : 0}/>
                <SummaryCard title="Paid"
                    value={summary ? summary.paid : 0}/>
                <SummaryCard title="Outstanding"
                    value={summary ? summary.outstanding : 0}/>
            </div>
            <AlertCard title="Today's Reminders">{
                    alerts.map(person => (
                        <p key={person.id}>{person.name}</p>
                    ))}
            </AlertCard>
            <AlertCard title="Highest Debtors">{
                    debtors.map(person => (
                        <DebtorCard
                            key={person.name}
                            name={person.name}
                            amount={person.balance}/>))}
            </AlertCard><hr />
            <AddPerson /><hr />
            <PeopleList />
        </div>
    );
}

    , []);

    return (

        <div>

            <Navbar />

            <h1>
                DebtBook Dashboard
            </h1>

            <div>

                <SummaryCard
                    title="People"
                    value={summary ? summary.people : 0}
                />

                <SummaryCard
                    title="Borrowed"
                    value={summary ? summary.borrow : 0}
                />

                <SummaryCard
                    title="Paid"
                    value={summary ? summary.paid : 0}
                />

                <SummaryCard
                    title="Outstanding"
                    value={summary ? summary.outstanding : 0}
                />

            </div>

            <AlertCard title="Today's Reminders">

                {
                    alerts.map(person => (

                        <p key={person.id}>
                            {person.name}
                        </p>

                    ))
                }

            </AlertCard>

            <AlertCard title="Highest Debtors">

                {
                    debtors.map(person => (

                        <DebtorCard
                            key={person.name}
                            name={person.name}
                            amount={person.balance}
                        />

                    ))
                }

            </AlertCard>

            <hr />

            <AddPerson />

            <hr />

            <PeopleList />

        </div>

    );
}

export default Dashboard;
