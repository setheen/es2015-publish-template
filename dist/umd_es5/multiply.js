(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvbXVsdGlwbHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBS0E7UUFBQTtRQVFBLENBQUM7UUFORywwQkFBUSxHQUFSLFVBQVMsR0FBVSxFQUFFLEdBQVU7WUFFM0IsSUFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFjLEdBQUcsWUFBTyxHQUFHLGdCQUFXLE1BQVEsQ0FBQyxDQUFDO1lBQzVELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLEFBUkQsSUFRQztJQUVEO3NCQUFlLE9BQU8sQ0FBQyJ9