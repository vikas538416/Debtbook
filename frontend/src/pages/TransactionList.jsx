import { useEffect, useState } from "react";

import TransactionCard from "../components/TransactionCard";

function TransactionList({ personId }) {

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
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        );
    };

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

                        return (
                            transaction.type
                            === filter
                        );

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

export default TransactionList;
