<<<<<<< HEAD
import { useEffect,useState} from "react";

function Reminders() {
    const [reminders,setReminders] = useState([]);
    useEffect(() => {
        fetch(
            "http://127.0.0.1:5000/reminders"
        )
        .then(response =>response.json())
        .then(data =>setReminders(data));
    }, []);
    return (
        <div>
            <h1>Upcoming Reminders</h1>
            {reminders.map(person => (
                <div key={ person.id}>
                    <h3>{ person.name}</h3>
                    <p>{person.phone}</p>
                    <p>Due:{person.reminder_date}</p>
                </div>
                ))
            }
        </div>
    );
}
=======
import {
    useEffect,
    useState
}
    from "react";

function Reminders() {

    const [reminders,
        setReminders] =
        useState([]);

    useEffect(() => {

        fetch(
            "http://127.0.0.1:5000/reminders"
        )

            .then(
                response =>
                    response.json()
            )

            .then(
                data =>
                    setReminders(data)
            );

    }, []);

    return (

        <div>

            <h1>

                Upcoming Reminders

            </h1>

            {

                reminders.map(

                    person => (

                        <div
                            key={
                                person.id
                            }
                        >

                            <h3>

                                {
                                    person.name
                                }

                            </h3>

                            <p>

                                {
                                    person.phone
                                }

                            </p>

                            <p>

                                Due:

                                {
                                    person.reminder_date
                                }

                            </p>

                        </div>

                    )

                )

            }

        </div>

    );

}

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
export default Reminders;
