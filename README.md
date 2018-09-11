# AngularExercise

A To-Do app that allows the creation, update, and deletion of to-dos

# Getting Started
## Prerequisites
* NodeJS version 8.0.0 or later
* NPM version 5.6.0 or later

## Install
Run the following commands to get started
```bash
git clone https://github.com/vmike245/angular-exercise.git
cd angular-exercise
npm install
```

## Building the code
Run the following command to build the application
```bash
npm run build
```

## Running the program
To start up the web server run
```bash
npm run start-server
```
Navigate to `http://localhost:3000` to view the application

# Assumptions
The todo list is all held in memory, so when the server is shut down the list of to-dos will no longer exist.

# Future work
Right now the login page doesn't actually do anything. It would be good to actually have an authentication layer. Once that exists, I would want to store the list of to-dos per user. Right now it stores them all together, so different users will see each others to-dos.