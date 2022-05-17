const inquirer = require('inquirer');
const { connection } = require('./db/connection');
require('console.table');
const db = require('./db/db');

const questions = [
    {
    type: 'list',
    name: 'choices', 
    message: 'Where would you like to start?',
    choices:    ['View all Departments', 
                'View all Roles', 
                'View all Employees', 
                'Add Department', 
                'Add Role', 
                'Add Employee', 
                'Update Employee Role',
                'Exit'
                ]
    },
]

function start() {
    inquirer.prompt(questions)
    .then((answer) => {
        const { choices } = answer;
        if (choices === "View all Departments") {
        viewAllDepartments();
        }
        if (choices === "View all Roles") {
            viewAllRoles();
        }
        if (choices === "View all Employees") {
            viewAllEmployees();
        }
        if (choices === "Add Department") {
            addDepartment();
        }
        if (choices === "Add Role") {
            addRole();
        }
        if (choices === "Add Employee") {
            addEmployee();
        }
        if (choices === "Update Employee Role") {
          updateEmployee();
        }
        if (choices === "Exit") {
          connect.end();
        }
    })        
}

start();