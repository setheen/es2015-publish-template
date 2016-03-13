System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MathLib;
    return {
        setters:[],
        execute: function() {
            MathLib = (function () {
                function MathLib() {
                }
                MathLib.prototype.multiply = function (one, two) {
                    var result = one * two;
                    console.log("Muliplying " + one + " by " + two + " to get " + result);
                    return result;
                };
                return MathLib;
            }());
            exports_1("MathLib", MathLib);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlwbHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvbXVsdGlwbHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUtBO2dCQUFBO2dCQVFBLENBQUM7Z0JBTkcsMEJBQVEsR0FBUixVQUFTLEdBQVUsRUFBRSxHQUFVO29CQUUzQixJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFjLEdBQUcsWUFBTyxHQUFHLGdCQUFXLE1BQVEsQ0FBQyxDQUFDO29CQUM1RCxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUNsQixDQUFDO2dCQUNMLGNBQUM7WUFBRCxDQUFDLEFBUkQsSUFRQztZQUVRLDZCQUFPIn0=