(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './multiply'], factory);
    }
})(function (require, exports) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(require('./multiply'));
    // Some floating comments for no reason
    function hello(text) {
        console.log(`Hello ${text} from es2015-publish-template`);
    }
    exports.hello = hello;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUEsaUJBQWMsWUFBWSxDQUFDLEVBQUE7SUFFM0IsdUNBQXVDO0lBRXZDLGVBQXNCLElBQWE7UUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksK0JBQStCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBSGUsYUFBSyxRQUdwQixDQUFBIn0=