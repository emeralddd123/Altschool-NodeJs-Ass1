import { mkdir, writeFile, appendFile, rename, readFile, unlink } from 'fs';
import { resolve, join } from 'path';

let cwd = resolve()
let folderPath = join(cwd, 'Students');
let newFolderPath = join(cwd, 'Names');
let myName = 'Usman Abdulsalam'
let moreDetails = `age: 21\n sex:Male \n phone number: 0905763XXXX \n role:Backend Engineer`

function makeDirectory() {
    mkdir(folderPath, (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('Folder created successfully!')
}
console.log(makeDirectory());


function writeToFile() {
    writeFile(join(folderPath, 'user.js'), 'Hello World', (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('File written successfully!')
}
console.log(writeToFile());



function renameDirectory() {
    rename(folderPath, newFolderPath, (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('Directory renamed successfully!')
}
console.log(renameDirectory())

function reWriteToFile() {
    writeFile(join(newFolderPath, 'user.js'), myName, (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('File written successfully!')
}
console.log(reWriteToFile())

function appendToFile() {
    appendFile(join(newFolderPath, 'user.js'), moreDetails, err => {
        if (err) {
            console.log(err);
        }
    })
    console.log('File appended successfully!')
}
console.log(appendToFile())

function renameFile() {
    rename(join(newFolderPath, 'user.js'), join(folderPath, 'usman.js'), (err) => {
        if (err) {
            console.log(err);
        }

    })
    console.log('file renamed successfully!')
}
console.log(renameFile())

function readContent() {
    readFile(join(newFolderPath, 'usman.js'), (err, data) => {
        if (err) throw err;
        console.log(data);
    });

    console.log('file read successfully!')
}
console.log(readContent())

function deleteFile() {
    unlink(join(newFolderPath, 'usman.js'), (err) => {
        if (err) throw err;
    })
    console.log('File deleted succesfully')
}
console.log(deleteFile())


function deleteDirectory() {
    unlink(newFolderPath, (err) => {
        if (err) throw err
    });
    console.log('folder deleted succesfully!')
}
console.log(deleteDirectory())

