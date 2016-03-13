define(["require", "exports"], function (require, exports) {
    "use strict";
    var MathLib = (function () {
        function MathLib() {
        }
        MathLib.prototype.multiply = function (one, two) {
            var result = one * two;
            console.log("Multiplying " + one + " by " + two + " to get " + result);
            return result;
        };
        return MathLib;
    }());
    exports.MathLib = MathLib;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvbXVsdGlwbHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFLQTtRQUFBO1FBUUEsQ0FBQztRQU5HLDBCQUFRLEdBQVIsVUFBUyxHQUFVLEVBQUUsR0FBVTtZQUUzQixJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWUsR0FBRyxZQUFPLEdBQUcsZ0JBQVcsTUFBUSxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBQ0wsY0FBQztJQUFELENBQUMsQUFSRCxJQVFDO0lBUlksZUFBTyxVQVFuQixDQUFBIn0=