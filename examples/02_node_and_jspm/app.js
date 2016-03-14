"use strict"
// ASCII Text generator: http://patorjk.com/software/taag/#p=display&c=c%2B%2B&w=%20&f=Straight&t=Custom%20Library

//   __           
//  (_  _|_    _  
//  __)(-|_|_||_) 
//            |   
// Because we are going to use systemjs to bring in jspm packages, we need to re-flow our code in an asynchronous fashion
// We'll be using a promise to execute the four steps in order and define the business logic up front in the following two methods
let System = require('jspm').Loader();
let result = null;
function esLogic(es)
{
    es.hello('World!');
    let math = new es.MathLib();
    result = math.multiply(3,4);
    console.log(`expecting 12, calculated ${result}`);
}

function lodashLogic(_)
{
    console.log('lodash has also found the calculated result to be ' + _.get({calculatedResult: result}, 'calculatedResult'));
}

//   __        
//  |__)    _  
//  | \ |_|| ) 
//             
esNPM()
.then(esJSPM)
.then(lodashNPM)
.then(lodashJSPM)
.then(done)
.then(() => process.exit(0));

//   __                                
//  /      _|_ _  _   |  .|_  _ _  _   
//  \__|_|_)|_(_)|||  |__||_)| (_|| \/ 
//                                  /  
// Using NPM
function esNPM()
{
    return new Promise((resolve, reject) =>
    {
        console.log('------------es2015-publish-template with NPM------------');
        let es = require('es2015-publish-template');
        // Uncomment line below to view typscript intellisense working
        // This is because npm brought in the es2015-publish-template definitions, not because of jspm
        //es.

        esLogic(es);
        resolve();
    });
}

// Using JSPM
function esJSPM()
{
    return new Promise((resolve, reject) =>
    {
        System.import('es2015-publish-template').then((es) =>
        {
            // Notice, you will not get definitions when uncommenting the line below :(
            //es.
            console.log('------------es2015-publish-template with JSPM-----------');
            esLogic(es);
            resolve();
        });
    });
}

//   __                                  
//  |__)_  _    | _  _  |  .|_  _ _  _   
//  |  (_)|_)|_||(_||   |__||_)| (_|| \/ 
//        |                           /  
// Using NPM
function lodashNPM()
{
    return new Promise((resolve, reject) =>
    {
        console.log('---------------------lodash with NPM--------------------');
        let _ = require('lodash');
        // Uncomment line below to view typescript intellisense working
        // This is because "typings" brough in the lodash definitions, not because of npm or jspm
        //_.
        
        lodashLogic(_);
        resolve();
    });
}

// Using JSPM
function lodashJSPM()
{
    return new Promise((resolve, reject) =>
    {
        System.import('lodash').then((_) =>
        {
            // Notice, you will not get definitions when uncommenting the line below :(
            //_.
            
            console.log('--------------------lodash with JSPM--------------------');
            lodashLogic(_);
            resolve();
        });
    });
}

function done()
{
    console.log('If you can see this, it means this example performed as expected');
}