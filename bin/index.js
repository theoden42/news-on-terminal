#!/usr/bin/env node

const yargs = require('yargs');
const chalk = require('chalk');
const boxen = require('boxen');


const introduction = boxen(chalk.bold.blue('Welcome to the NEWSAPI CLI'), {padding: 1, borderStyle: 'double', title: 'HELLO', titleAlignment: 'center', textAlignment: 'center'});

const usage = chalk.keyword('orange')("\nCommand to execute: newsfind -d <Date to find news> -t1 <category: sports, celebrities, currentaffairs>");

console.log(introduction);
