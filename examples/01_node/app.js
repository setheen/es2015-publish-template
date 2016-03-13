"use strict"
// ASCII Text generator: http://patorjk.com/software/taag/#p=display&c=c%2B%2B&w=%20&f=Straight&t=Custom%20Library

//   __                                
//  /      _|_ _  _   |  .|_  _ _  _   
//  \__|_|_)|_(_)|||  |__||_)| (_|| \/ 
//                                  /  
var es = require('es2015-publish-template');

// Uncomment line below to view typscript intellisense working
//es.

// console.log(es.hello);
// let math = new es.MathLib();
// let result = math.multiply(3,4);
// console.log(`expecting 12, calculated ${result}`);

//   __                                  
//  |__)_  _    | _  _  |  .|_  _ _  _   
//  |  (_)|_)|_||(_||   |__||_)| (_|| \/ 
//        |                           /  
var _ = require('lodash');
// You still wouldn't have typescript intellisense working at this point without doing these three steps
// 1. run command "typings install lodash --save"
// 2. create tsconfig.json with appropriate "files" entries
// 3. if using vscode, you must first restart the editor before it knows to parse d.ts files from typings

// Uncomment line below to view typescript intellisense working
//_.

console.log('lodash has also found the calculated result to be ' + _.get({calculatedResult: result}, 'calculatedResult'));

console.log('If you can see this, it means this example performed as expected');