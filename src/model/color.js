"use strict";
exports.__esModule = true;
var Hex = (function () {
    function Hex(hex) {
        this.hex = "#000000";
        this.hex = (hex.toString().length == 6) ?
            "#" + hex : (hex.toString().length == 7) ?
            hex : null;
    }
    Hex.prototype.toString = function () {
        return this.hex;
    };
    return Hex;
}());
var Color = (function () {
    function Color(color) {
        var hex;
        if (color instanceof Hex) {
            hex = color;
        }
        else {
            hex = new Hex(color);
        }
        this.hex = hex;
    }
    return Color;
}());
exports.Color = Color;
