const inquirer = require("inquirer");
const DB = require("../db/connection");
let view = require("./view");
let app = require("../app");
let roleArray = [];
let managerArray = [];
let manager = [];
let manager_id = [];

//function to add an employee
exports.addEmployee = async () => {
  try {
    var roles = await DB.promise().query("SELECT * FROM company_role");
    var availableRoles = [];
    for (let i = 0; i < roles[0].length; i++) {
      availableRoles.push({
        values: roles[0][i].role_id,
        name: roles[0][i].title,
      });
    }
    var managers = await DB.promise().query("SELECT * FROM employee");
    var availableManagers = [];
    for (let i = 0; i < managers[0].length; i++) {
      availableManagers.push({
        values: managers[0][i].role_id,
        name: managers[0][i].first_name + " " + managers[0][i].last_name,
      });
    }

    var answer = await inquirer.prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "role_id",
        message: "What will be the role?",
        choices: availableRoles,
      },
      {
        type: "list",
        name: "manager_id",
        message: "Who will be the manager?",
        choices: availableManagers,
      },
    ]);
    console.log(answer);
    for (let i = 0; i < availableRoles.length; i++) {
      if ((answer.role_id = availableRoles[i].name)) {
        answer.role_id = availableRoles[i].values;
      }
    }
    for (let i = 0; i < availableManagers.length; i++) {
      if ((answer.manager_id = availableManagers[i].name)) {
        answer.manager_id = availableManagers[i].values;
      }
    }
    console.log(answer);
    DB.query(`INSERT INTO employee SET ?`, answer, (err, res) => {
      if (err) throw err;
      console.log("Employee added!");
      app.start();
    });
  } catch (err) {
    console.log(err);
  }
};