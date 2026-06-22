function Backup() {

    const createBackup =
        async () => {
<<<<<<< HEAD
            try{
                const response =
                    await fetch("http://127.0.0.1:5000/backup"
                    );
                const data =
                    await response.json();
                alert("Backup Created");
            }
            catch(error){
                console.log(error);
                alert("Server Error");
            }
        };
    const restoreBackup =
        async () => {
            try{
                const response = await fetch(
                    "http://127.0.0.1:5000/restore"
                );
                const data = await response.json();
                alert("Backup Restored");
            }
            catch(error){
                console.log(error);
                alert("Server Error")
            }
=======
            const response =
                await fetch(    "http://127.0.0.1:5000/backup"
                );
            const data =
                await response.json();
            alert( "Backup Created");
        };
    const restoreBackup =
        async () => {
            const response = await fetch(
            "http://127.0.0.1:5000/restore"
                );
            const data = await response.json();
            alert( "Backup Restored");
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
        };
    return (
        <div>
            <h1> Backup Manager</h1>
            <button
                onClick={createBackup}>
                Create Backup
            </button><br /><br />
            <button
                onClick={ restoreBackup}>
                Restore Backup
            </button>
        </div>
    );
}
export default Backup;
