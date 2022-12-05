let inquirer = require("inquirer");
const DB = require("../db/connection");
const app = require("../app");

exports.viewAllEmployees = () => {
  DB.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    app.start();
  });
};

exports.viewAllDepartments = () => {
  DB.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    app.start();
  });
};

exports.viewAllRoles = () => {
  DB.query("SELECT * FROM company_role", (err, res) => {
    if (err) throw err;
    console.table(res);
    app.start();
  });
};

exports.viewAllEmployeesByDepartment = () => {
  DB.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    app.start();
  });
};
