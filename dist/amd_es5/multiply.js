define(["require", "exports"], function (require, exports) {
    "use strict";
    var MathLib = (function () {
        function MathLib() {
        }
        MathLib.prototype.multiply = function (one, two) {
            var result = one * two;
            console.log("Muliplying " + one + " by " + two + " to get " + result);
            return result;
        };
        return MathLib;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MathLib;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvbXVsdGlwbHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFLQTtRQUFBO1FBUUEsQ0FBQztRQU5HLDBCQUFRLEdBQVIsVUFBUyxHQUFVLEVBQUUsR0FBVTtZQUUzQixJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWMsR0FBRyxZQUFPLEdBQUcsZ0JBQVcsTUFBUSxDQUFDLENBQUM7WUFDNUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBQ0wsY0FBQztJQUFELENBQUMsQUFSRCxJQVFDO0lBUkQ7NkJBUUMsQ0FBQSJ9