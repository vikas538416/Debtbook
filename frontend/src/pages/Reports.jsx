function Reports() {
    const exportExcel = () => {
        alert( "Excel Export Coming");
    };
    const exportPdf = () => {
        alert("PDF Export Coming");
    };
    return (
        <div>
            <h1>Reports</h1>
            <button onClick={exportExcel}>
                Export Excel </button>
            <br /><br />
            <button onClick={ exportPdf}>
                Export PDF
            </button>
        </div>
    );
}
export default Reports;
