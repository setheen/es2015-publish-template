System.register(['./multiply'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    // Some floating comments for no reason
    function hello(text) {
        console.log(`Hello ${text} from es2015-publish-template`);
    }
    exports_1("hello", hello);
    return {
        setters:[
            function (multiply_1_1) {
                exports_1({
                    "MathLib": multiply_1_1["MathLib"],
                    "MultiplyInterface": multiply_1_1["MultiplyInterface"]
                });
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUEsdUNBQXVDO0lBRXZDLGVBQXNCLElBQWE7UUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksK0JBQStCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBSEQseUJBR0MsQ0FBQSJ9