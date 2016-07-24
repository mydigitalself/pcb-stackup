#!/usr/bin/env node

var program = require('commander')

program
  .arguments('[file...]')
  .option('-c, --color <color>', 'The desired board color')
  .action(main)
  .parse(process.argv)

function main(fileNames) {
  console.log(fileNames)
  console.log(program.color)
}
