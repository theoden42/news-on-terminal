#!/usr/bin/env node

const yargs = require('yargs');
const chalk = require('chalk');
const boxen = require('boxen');
const clear = require('clear');
const figlet = require('figlet');
const { getNews } = require('../scripts/newsfetch');
require('dotenv').config();


fetchnews = async(keyword, count) => {
    const response = await getNews(keyword, count);
    const articles = response.articles.results;

    articles.forEach(element => {
        const title = chalk.bold.red(element.title);
        const body = chalk.bold.white(element.body);
        const display = boxen(body, {pading: 1, borderStyle: 'double', title: title, titleAlignment: 'center', textAlignment: 'center'});
        console.log(display);
    });
};


const introduction = chalk.bold.yellowBright(figlet.textSync('NEWS ON TERMINAL', { horizontalLayout: 'full' }));
const usage = chalk.bold.keyword('orange')("\nCommand to execute: \nnewsfind -k=<keyword you want to search for> -c=<number of articles you want to read should not exceed 5>");


const options = yargs
.usage(usage)
.option("k", {alias:"keyword", describe: "keyword to search in article", type: "string", demandOption: true})
.option("c", {alias:"count", describe: "tell how many article to show for given keyword", type: "number", demandOption: true})
.help(true)
.argv;


clear();
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
console.log(introduction);
const k = argv.k;
const c = argv.c;
if(c < 5){
    yargs.help();
}
fetchnews(argv.k, argv.c);






