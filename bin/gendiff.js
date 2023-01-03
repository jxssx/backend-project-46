#!/usr/bin/env node

import { program } from 'commander';
import diff from '../src/index.js';

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    console.log(diff(filepath1, filepath2, options.format));
  });

program.parse(process.argv);
