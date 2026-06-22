function AlertCard({

<<<<<<< HEAD
    title,children
}) {
    return (
        <div
            style={{
                background: "#fff3cd",
                padding: "15px",
                margin: "10px",
                borderRadius: "10px"}}>
        <h3>{title}</h3>
            {children}
        </div>
    );
}
=======
    title,

    children

}) {

    return (

        <div

            style={{

                background: "#fff3cd",

                padding: "15px",

                margin: "10px",

                borderRadius: "10px"

            }}

        >

            <h3>

                {title}

            </h3>

            {children}

        </div>

    );

}

>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
export default AlertCard;
