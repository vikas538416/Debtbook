import { useState } from "react";

function AddTransaction({
    personId
}) {
    const [amount, setAmount] = useState("");
    const [note, setNote] = useState("");
    const [type, setType] = useState("BORROW");
        const saveTransaction =
        async () => {
            if(!amount){
                alert("Amount Required");
                return ;
            }
            try{
                const response =
                    await fetch(
                        "http://127.0.0.1:5000/transactions",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                person_id: personId,
                                amount, note, type
                            })
                        }
                    );
                const data = await response.json();
                alert(data.message);
            }
            catch(error){
                console.log(error);
                alert("Server Error");
            }
        };
    return (
        <div>
            <h2>Add Borrow Entry</h2>
            <input
                placeholder="Amount"
                onChange={(e) =>
                    setAmount( e.target.value)}/><br />
            <input
                placeholder="Reason"
                onChange={(e) => setNote( e.target.value)}/><br />
            <select onChange={(e) =>
                    setType( e.target.value) }>
                <option value="BORROW">  Borrow</option>
                <option value="PAID">Paid</option>
            </select>
            <button onClick={saveTransaction}>Save</button>
        </div>
    );
}
export default AddTransaction;
