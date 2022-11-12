#!/usr/bin/env node

import genDiffJSON from '../src/difference.js';
import * as fs from 'fs';
import path from 'path';
import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h --help', 'output usage information')
  .option(('-f, --format <type>', 'output format'))
  .action((filepath1, filepath2) => {
    const formatPath1 = path.resolve(filepath1);
    const formatPath2 = path.resolve(filepath2);
    const file1 = JSON.parse(fs.readFileSync(formatPath1, 'utf8'));
    const file2 = JSON.parse(fs.readFileSync(formatPath2, 'utf8'));
    const difference = genDiffJSON(file1, file2).join('\n');
    console.log('{');
    console.log(difference);
    console.log('}');
  });



program.parse();
