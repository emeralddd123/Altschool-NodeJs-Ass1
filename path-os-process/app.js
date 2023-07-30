import { resolve, sep, dirname, join } from 'path'
import {  } from 'os'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const sampleFilePath = join(__dirname, 'my-files')

// for getting current working directory using resolve function from path module
const cwd = resolve()
console.log(cwd)

// print out the seperator of a given file path
const seperator = sep
console.log(seperator)

// print out the extension of a given file path
console.log(__dirname)