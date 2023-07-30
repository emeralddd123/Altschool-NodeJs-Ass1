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

function writeToFile() {
    writeFile(join(folderPath, 'user.js'), 'Hello World', (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('File written successfully!')
}


function renameDirectory() {
    rename(folderPath, newFolderPath, (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('Directory renamed successfully!')
}

function reWriteToFile(){
    writeFile(join(newFolderPath, 'user.js'), myName, (err) => {
        if (err) {
            console.log(err);
        }
    });
    console.log('File written successfully!')
}

function appendToFile(){
    appendFile(join(newFolderPath, 'user.js'), moreDetails, err => {
        if (err) {
            console.log(err);
        }
    })
    console.log('File appended successfully!')
}

function renameFile(){
    rename(join(newFolderPath, 'user.js'), join(folderPath, 'usman.js'), (err) => {
        if (err) {
            console.log(err);
        }

    })
    console.log('file renamed successfully!')
}

function readContent(){
    readFile(join(newFolderPath, 'usman.js'), (err, data) => {
        if (err) throw err;
        console.log(data);
      });

      console.log('file read successfully!')
}

function deleteFile(){
    unlink(join(newFolderPath, 'usman.js'), (err) => {
        if (err) throw err;
    })
    console.log('File deleted succesfully')
}

function deleteDirectory(){
    unlink(newFolderPath, (err) => {
        if (err) throw err
    });
    console.log('folder deleted succesfully!')
}

console.log(makeDirectory());
console.log(writeToFile());
console.log(renameDirectory())
console.log(reWriteToFile())
console.log(appendToFile())
console.log(renameFile())
console.log(readContent())
console.log(deleteFile())
console.log(deleteDirectory())