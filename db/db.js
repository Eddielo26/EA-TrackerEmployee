const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  // View Employees
  viewAllEmployees() {
    return this.connection.query(
      `SELECT employee.id, 
                      employee.first_name, 
                      employee.last_name, 
                      role.title, 
                      department.name AS department,
                      role.salary, 
                      CONCAT (manager.first_name, " ", manager.last_name) AS manager
               FROM employee
                      LEFT JOIN role ON employee.role_id = role.id
                      LEFT JOIN department ON role.department_id = department.id
                      LEFT JOIN employee manager ON employee.manager_id = manager.id`
    );
  }

  // View Departments
  viewDepartments() {
    return this.connection.query("SELECT * FROM department;");
  }

  // Display Roles
  viewAllRoles() {
    return this.connection.query(
      `SELECT role.id, role.title, role.salary, department.name AS department
            FROM role
            INNER JOIN department ON role.department_id = department.id`
    );
  }

  // Add Department
  addDepartment(name) {
    const sql = `INSERT INTO department (name)
        VALUES (?)`;
    return this.connection.query(sql, name, (err, res) => {
      if (err) throw err;
      console.log("Department has been added!");
    });
  }

  // Add Role
  addRole(roleName, salaryTotal, deptID) {
    const data = [roleName, salaryTotal, deptID];
    const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;

    return this.connection.query(sql, data, (err, res) => {
      if (err) throw err;
      console.log("New Role has been added");
    });
  }

  // Add Employee
  addEmployee(firstName, lastName, roleID, managerID) {
    const data = [firstName, lastName, roleID, managerID];
    const sql = `INSERT INTO employee
            (first_name, last_name, role_id, manager_id) 
            VALUES (?, ?, ?, ?)`;
    return this.connection.query(sql, data, (err, res) => {
      if (err) throw err;
      console.log("New Employee added");
    });
  }


  // Update Employee role
  updateEmployeeRole(employeeId, employeeTitle) {
    const data = [employeeTitle, employeeId];
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    return this.connection.query(sql, data, (err, res) => {
      if (err) throw err;
    });
  }
}

module.exports = new DB(connection);
