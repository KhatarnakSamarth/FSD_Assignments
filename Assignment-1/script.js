// Question: Using the path module, create a program that receives a file path and displays: file name, extension, directory name, and absolute path. Why is using 'path.join()' generally safer than manually concatenating paths using '/' ?
// ANSWER : 

import path from "path"

function fileProps(usrFilePath) {
    console.log('File Details: ')
    console.log('-------------')
    console.log(`File name -> ${path.basename(usrFilePath)}`)
    console.log(`Extension -> ${path.extname(usrFilePath)}`)
    console.log(`Working Directory -> ${path.dirname(usrFilePath)}`)
    console.log(`Directory name -> ${path.basename(path.dirname(path.resolve(usrFilePath)))}`)
    console.log(`Absolute path -> ${path.resolve(usrFilePath)}`)
}

const filePath = process.argv[2];

if (filePath) {
    fileProps(filePath);
}
else {
    console.log('=============================')
    console.log(' Please provide a file path. ');
    console.log('=============================')
}


//=================================================================================================


/*

Question: Why is path.join() safer?

Answer: path.join() uses the correct OS-specific path separator (/ on Linux/macOS and \ on Windows). It also normalises .. and duplicate slashes, making paths more reliable than manually concatenating strings with /.

Example:
const fullPath = path.join('folder', 'subfolder', '..', 'file.txt');
console.log(fullPath);

Output -> folder\file.txt

This produces a normalised path to file.txt regardless of the operating system.

*/



