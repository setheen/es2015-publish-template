System.register(['./multiply'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    // Some floating comments for no reason
    function hello(text) {
        console.log("Hello " + text + " from es2015-publish-template");
    }
    exports_1("hello", hello);
    var exportedNames_1 = {
        'hello': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (multiply_1_1) {
                exportStar_1(multiply_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUEsdUNBQXVDO0lBRXZDLGVBQXNCLElBQWE7UUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLElBQUksa0NBQStCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBSEQseUJBR0MsQ0FBQSJ9