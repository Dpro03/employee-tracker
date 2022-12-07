let inquirer = require("inquirer");
let view = require("./view");
const app = require("../app");
const DB = require("../db/connection");
let employee_id = [];

// Update employee role
exports.updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the employee's first name",
        name: "firstName",
      },
      {
        type: "input",
        message: "Enter the employee's last name",
        name: "lastName",
      },
      {
        type: "input",
        message: "Enter the employee's new role ID",
        name: "roleID",
      },
    ])
    .then((answer) => {
      let query = `UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?`;
      DB.query(
        query,
        [answer.roleID, answer.firstName, answer.lastName],
        (err, res) => {
          if (err) throw err;
          console.log("Employee role updated!");
          app.start();
        }
      );
    });
};
