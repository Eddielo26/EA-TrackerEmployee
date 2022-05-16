const inquirer = require('inquirer');
const { connection } = require('./db/connection');
require('console.table');
const db = require('./db/db');

const questions = [
    {
    type: 'list',
    name: 'choices', 
    message: 'Where would you like to start?',
    choices:    ['View all departments', 
                'View all roles', 
                'View all employees', 
                'Add a department', 
                'Add a role', 
                'Add an employee', 
                'Update an employee role',
                'Exit'
                ]
    },
]