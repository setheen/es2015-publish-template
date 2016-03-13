(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './multiply'], factory);
    }
})(function (require, exports) {
    "use strict";
    const multiply_1 = require('./multiply');
    exports.MathLib = multiply_1.default;
    console.log('here');
});
// function add(one, two)
// {
//     let result = one + two;
//     console.log(`Adding ${one} and ${two} to make ${result}`);
//     return result;
// }
// function testAll()
// {
//     let test = new MathLib();
//     console.log(`Add result: ` + add(1,2));
//     console.log('Multiply Result: ' + new MathLib().multiply(1,2));
// } 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBQUEsMkJBQW9CLFlBQVksQ0FBQyxDQUFBO0lBQ3pCLGVBQU87SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUNwQix5QkFBeUI7QUFDekIsSUFBSTtBQUNKLDhCQUE4QjtBQUM5QixpRUFBaUU7QUFDakUscUJBQXFCO0FBQ3JCLElBQUk7QUFFSixxQkFBcUI7QUFDckIsSUFBSTtBQUNKLGdDQUFnQztBQUNoQyw4Q0FBOEM7QUFDOUMsc0VBQXNFO0FBQ3RFLElBQUkifQ==