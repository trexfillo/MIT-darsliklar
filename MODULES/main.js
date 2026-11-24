// Module package CORE

// setTimeout(function() { 
//   console.log("Ishga tushdi"); 
// }, 1000);



// let number = 0;

// setInterval(function() {
//   console.log("hisob:", number);
//   number++;
// }, 0);



// const fs = require('fs');

// const data = fs.readFileSync('./input.txt', 'utf8');
// console.log(data);

// console.log("==========");

// fs.writeFileSync('./input.txt', `${data} \n\t\t by BekzodAli`);
// const new_data = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_data);



// Module package EXTERNAL

//moment package
// const moment = require('moment');
//const time = moment().format();
//const time = moment().format('YYYY-MM-DD');

//console.log(time);

// setInterval(() => {
//     const time = moment().format();

//     console.log(`Hozirgi vaqt: ${time}`);
// }, 5000);



// inquirer package
// const inquirer = require('inquirer');

// inquirer.prompt([{type: 'input', name: 'raqam', message: 'Raqamni kiriting: '}])
// .then((answer) => {
//     console.log("Man kiritgan raqam qiymati:", answer.raqam);
// })
// .catch((err) => console.log(err));


// validator package
// const validator = require('validator');
// // const test = validator.isEmail('foo@bar.com');
// // const test = validator.isInt('fall');
// const test = validator.isIP('192.168.1.1a');
// console.log('test:', test);


// uuid package
const { v4: uuidv4 } = require('uuid');
const random = uuidv4();
console.log('random:', random);



// chalk package
const chalk = require('chalk');
const log = console.log;
//log(chalk.blue('Hello ') + random + chalk.red('!'));
//log(chalk.blue(`uuid creates: ${random}`));
log(chalk.red(`uuid creates: ${random}`));
// Module package FILE