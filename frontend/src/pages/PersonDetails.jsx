import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import AddTransaction from "./AddTransaction";

import SummaryCard from
    "../components/SummaryCard";

import TransactionList
    from "./TransactionList";

function PersonDetails() {
    const { id } =useParams();
    const [person, setPerson] =useState(null);
    const [balance,setBalance] = useState(null);
    useEffect(() => {
        fetch(
            "http://127.0.0.1:5000/balance/${id}")
            .then(response =>response.json())
            .then(data => setBalance(data) );
    }, [id]);
    if (!person) {
        return <h2>Loading...</h2>;}
    return (
        <div><SummaryCard title="Borrow Total"
            value={balance?balance.borrow:0}/>
            <SummaryCard title="Paid Total"
                value={balance?balance.paid:0}/>
            <SummaryCard
                title="Outstanding"
                value={balance ?balance.balance:0}/>
        </div>
    );
}
export default PersonDetails;
