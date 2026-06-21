function Backup() {

    const createBackup =
        async () => {
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
