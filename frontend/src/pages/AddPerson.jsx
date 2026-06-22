import { useState } from "react";

function AddPerson() {
<<<<<<< HEAD
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [reminderDate,setReminderDate] =useState("");
    const savePerson =
        async () => {
            if(!name){
                alert("Name Required");
                return ;
            }
            if(!phone){
                alert("Phone Required");
                return ;
            }
            try{
                const response =
                    await fetch(
                        "http://127.0.0.1:5000/people",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                user_id: 1, name, phone,
                                reminder_date: reminderDate
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
            <h2> Add Person</h2>
            <input placeholder="Name" onChange={(e) =>
                    setName( e.target.value)}/><br />
            <input placeholder="Phone"
            onChange={(e) => setPhone( e.target.value)}/><br />
            <input type="date"
                value={reminderDate}
                onChange={(e) =>
                    setReminderDate(e.target.value)}/>
            <button
                onClick={savePerson }>Save Person
            </button>
        </div>
    );
}
=======

    const [name, setName] =
        useState("");

    const [phone, setPhone] =
        useState("");

    const [reminderDate,setReminderDate] =useState("");

    const savePerson =
        async () => {

            const response =
                await fetch(
                    "http://127.0.0.1:5000/people",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body: JSON.stringify({

                            user_id: 1,

                            name,

                            phone,
                            reminder_date:reminderDate

                        })
                    }
                );

            const data =
                await response.json();

            alert(
                data.message
            );
        };

    return (

        <div>

            <h2>
                Add Person
            </h2>

            <input

                placeholder="Name"

                onChange={(e) =>
                    setName(
                        e.target.value
                    )
                }

            />

            <br />

            <input

                placeholder="Phone"

                onChange={(e) =>
                    setPhone(
                        e.target.value
                    )
                }

            />

            <br />

            <input

                type="date"

                value={reminderDate}

                onChange={(e) =>

                    setReminderDate(
                        e.target.value
                    )

                }

            />

            <button
                onClick={
                    savePerson
                }
            >
                Save Person
            </button>

        </div>
    );
}

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
export default AddPerson;
