import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";

function PeopleList() {
<<<<<<< HEAD
    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
=======

    const [people, setPeople] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
        fetch(
            `http://127.0.0.1:5000/search?query=${search}`
        )
            .then(response => response.json())
            .then(data => setPeople(data));
<<<<<<< HEAD
    }, [search]);
    if(people.length==0){
        return(
            <p>No people found.</p>
        );
    }
    return (
        <div>
            <SearchBar search={search} setSearch={setSearch}/>
            <h2>People List</h2>
            { people.map(person => (
=======

    }, [search]);

    return (

        <div>

            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <h2>People List</h2>

            {

                people.map(person => (

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
                    <div
                        key={person.id}
                        style={{
                            border: "1px solid gray",
                            padding: "10px",
<<<<<<< HEAD
                            margin: "10px"}}>
                        <Link to={`/person/${person.id}`}>
                            <h3>{person.name}</h3>
                        </Link>

                        <p> {person.phone}</p>
                    </div>
                ))
            }
        </div>
    );
}
=======
                            margin: "10px"
                        }}
                    >

                        <Link
                            to={`/person/${person.id}`}
                        >
                            <h3>
                                {person.name}
                            </h3>
                        </Link>

                        <p>
                            {person.phone}
                        </p>

                    </div>

                ))

            }

        </div>

    );
}

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
export default PeopleList;
