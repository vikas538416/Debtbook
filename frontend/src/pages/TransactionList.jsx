import { useEffect, useState } from "react";

import TransactionCard from "../components/TransactionCard";

function TransactionList({ personId }) {
<<<<<<< HEAD
    const [transactions, setTransactions] = useState([]);
    const [filter, setFilter] = useState("ALL");
    const [date,setDate] =useState("");
    const formatDate = (dateString) => {
        return new Date( dateString
        ).toLocaleDateString("en-IN",
=======

    const [transactions, setTransactions] =
        useState([]);

    const [filter, setFilter] =
        useState("ALL");

    const [date,setDate] =useState("");

    const formatDate = (dateString) => {

        return new Date(
            dateString
        ).toLocaleDateString(
            "en-IN",
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );
    };
<<<<<<< HEAD
    useEffect(() => {
        fetch(
            `http://127.0.0.1:5000/transactions/${personId}`
        )
        .then(response => response.json())
        .then(data => setTransactions(data));
    }, [personId]);
    if(transactions.length==0){
        return(
            <p>No transactions found.</p>
        );
    }
    return (
        <div>
            <h2>Transactions</h2>
            <select value={filter}
                onChange={(e) =>setFilter(e.target.value)}>
                <option value="ALL">All</option>
                <option value="BORROW">Borrow</option>
                <option value="PAID">Paid</option>
            </select><br /><br />
            <input type="date" value={date}
                onChange={(e) =>
                    setDate(e.target.value)}/>
            {transactions.filter(
                    transaction => {
                        if (!date) return true;
                        return transaction.created_at.startsWith(date);
                    }
                )
            }
            {
                transactions
                    .filter(transaction => {
                        if (filter === "ALL") {
                            return true;}
=======

    useEffect(() => {

        fetch(
            `http://127.0.0.1:5000/transactions/${personId}`
        )
            .then(response => response.json())
            .then(data => setTransactions(data));

    }, [personId]);

    return (

        <div>

            <h2>Transactions</h2>

            <select
                value={filter}
                onChange={(e) =>
                    setFilter(
                        e.target.value
                    )
                }
            >

                <option value="ALL">
                    All
                </option>

                <option value="BORROW">
                    Borrow
                </option>

                <option value="PAID">
                    Paid
                </option>

            </select>

            <br />
            <br />

            <input

                type="date"

                value={date}

                onChange={(e) =>

                    setDate(
                        e.target.value
                    )

                }

            />

            {
                transactions.filter(

                    transaction => {

                        if (!date)
                            return true;

                        return transaction
                            .created_at
                            .startsWith(date);

                    }
                )
            }

            {

                transactions

                    .filter(transaction => {

                        if (
                            filter === "ALL"
                        ) {
                            return true;
                        }

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
                        return (
                            transaction.type
                            === filter
                        );
<<<<<<< HEAD
                    })
                    .map(transaction => (
                        <div key={transaction.id}>
                            <TransactionCard
                                transaction={transaction}/>
                            <small>{ formatDate(
                                        transaction.created_at
                                    )}
                            </small>
                        </div>
                    ))
            }
        </div>
    );
}
=======

                    })

                    .map(transaction => (

                        <div
                            key={transaction.id}
                        >

                            <TransactionCard
                                transaction={
                                    transaction
                                }
                            />

                            <small>

                                {
                                    formatDate(
                                        transaction.created_at
                                    )
                                }

                            </small>

                        </div>

                    ))

            }

        </div>

    );
}

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
export default TransactionList;
