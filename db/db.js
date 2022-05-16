const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection;
    }
    // View Employees
    viewAllEmployees(){
        return this.connection.query(
            "SELECT * FROM employee;"
        );
    }

    // View Departments
    viewDepartments(){
        return this.connection.query(
            "SELECT * FROM department;"
        );
    }

    // Display Roles
    viewAllRoles(){
        return this.connection.query(
            "SELECT * FROM role;"
        );
    }

}

module.exports = new DB(connection);