"use strict";
exports.__esModule = true;
var Guid = (function () {
    function Guid(str) {
        this.str = str;
    }
    Guid.prototype.toString = function () {
        return this.str;
    };
    Guid.getNewGuid = function () {
        // your favourite guid generation function could go here
        // ex: http://stackoverflow.com/a/8809472/188246
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var guidStr = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return new Guid(guidStr);
    };
    return Guid;
}());
exports.Guid = Guid;
