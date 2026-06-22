from flask import Blueprint
from flask import jsonify

<<<<<<< HEAD
from Debtbook.backend.utils.backup import (
    create_backup
)

from Debtbook.backend.utils.restore import (
=======
from utils.backup import (
    create_backup
)

from utils.restore import (
>>>>>>> 61108bc051646086413a5603c7e795890ca47c7e
    restore_backup
)

backup_bp = Blueprint(
    "backup",
    __name__
)

@backup_bp.route(
    "/backup"
)
def backup_database():

    path = create_backup()

    return jsonify({

        "success": True,

        "backup":
        path

    })

@backup_bp.route(
    "/restore"
)
def restore_database():
    path = restore_backup()
    return jsonify({
        "success": True,
        "restored":
        path
    })
