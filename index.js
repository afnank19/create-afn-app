#!/usr/bin/env node

const { program } = require("commander");
const fs = require("fs-extra"); // Optional: for file operations
const path = require("path");

program
  .version("0.0.1")
  .argument("<project-name>", "Name of the project")
  .action((projectName) => {
    console.log("Project Name is: ", projectName);

    console.log("Creating a ReactJs frontend");
    console.log("Creating an ExpressJS backend");
    const projectPath = path.resolve(process.cwd(), projectName);
    const templatePath = path.join(__dirname, "template");

    // Copy the entire template folder to the new project directory
    fs.copySync(templatePath, projectPath);

    console.log("Project setup complete!");

    console.log("cd into both folders, and run: ");
    console.log("npm install");
  });

program.parse(process.argv);
