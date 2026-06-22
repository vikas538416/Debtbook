function TransactionCard({
    transaction
<<<<<<< HEAD
}) {const isBorrow = transaction.type ==="BORROW";
    return (
        <div className={ isBorrow?"borrow-card": "paid-card"}>
            <h3> {transaction.type}</h3>
            <h2>₹{ transaction.amount}</h2>
            <p>{transaction.note}</p>
            <small>{ transaction.created_at}</small>
=======
}) {const isBorrow =
        transaction.type ==="BORROW";
    return (
        <div
            className={ isBorrow?
                    "borrow-card": "paid-card"
            }>
            <h3> {transaction.type}</h3>
            <h2>₹{ transaction.amount}</h2>
            <p>{transaction.note}</p>
            <small>{ transaction.created_at}
</small>
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
        </div>
    );
}
export default TransactionCard;
