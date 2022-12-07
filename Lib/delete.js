const inquirer = require("inquirer");
const DB = require("../db/connection");
let view = require("./view");
let app = require("../app");
let roleArray = [];
let managerArray = [];
let manager = [];
let manager_id = [];
let emp_id = [];

//fuction to delete ann employee by employee_id
exports.deleteEmployee = async () => {
  try {
    var employees = await DB.promise().query("SELECT * FROM employee");
    var availableEmployees = [];
    for (let i = 0; i < employees[0].length; i++) {
      availableEmployees.push({
        values: employees[0][i].emp_id,
        name: employees[0][i].first_name + " " + employees[0][i].last_name,
      });
    }
    var answer = await inquirer.prompt([
      {
        type: "list",
        name: "employee_id",
        message: "Which employee would you like to delete?",
        choices: availableEmployees,
      },
    ]);
    for (let i = 0; i < availableEmployees.length; i++) {
      if ((answer.emp_id = availableEmployees[i].name)) {
        answer.emp_id = availableEmployees[i].values;
      }
    }
    await DB.promise().query(
      "DELETE FROM employee WHERE emp_id = ?",
      answer.emp_id
    );
    console.log("Employee deleted");
    app.start();
  } catch (err) {
    console.log(err);
  }
};
