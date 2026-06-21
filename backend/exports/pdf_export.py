from reportlab.platypus import (
    SimpleDocTemplate,
    Table
)
def export_pdf(data, filename):
    pdf = SimpleDocTemplate(
        filename
    )
    table_data = []
    table_data.append(
        [
            "Amount",
            "Type",
            "Note",
            "Date"
        ]
    )
    for row in data:
        table_data.append(
            [
                row["amount"],
                row["type"],
                row["note"],
                row["created_at"]
            ]
        )
    table = Table(
        table_data
    )
    pdf.build([table])
    return filename
