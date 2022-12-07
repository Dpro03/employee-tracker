//dependencies
let inquirer = require("inquirer");

let table = require("console.table");
let app = require("./app");
let view = require("./lib/view");
let update = require("./lib/update");
let add = require("./lib/add");
const DB = require("./db/connection");
let deleteEmployee = require("./lib/delete");

//function to start the application
exports.start = () => {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "choice",
      choices: [
        "View all employees",
        "Add employee",
        "Update employee role",
        "Delete employee",
        "Exit",
      ],
    })
    .then(function (answer) {
      switch (answer.choice) {
        case "View all employees":
          view.viewAllEmployees();
          break;
        case "Add employee":
          add.addEmployee();
          break;
        case "Update employee role":
          update.updateEmployeeRole();
          break;
        case "Delete employee":
          deleteEmployee.deleteEmployee();
          break;
        case "Exit":
          DB.end();
          break;
      }
    });
};

app.start();
