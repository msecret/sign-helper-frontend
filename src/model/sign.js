"use strict";
exports.__esModule = true;
var color_1 = require("./color");
var guid_1 = require("./guid");
var PLACEHOLDER_IMG_URL = 'http://placehoder.jpg';
var Orientation;
(function (Orientation) {
    Orientation[Orientation["horizontal"] = 1] = "horizontal";
    Orientation[Orientation["vertical"] = 2] = "vertical";
})(Orientation || (Orientation = {}));
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function createDisplayName(name) {
    return capitalizeFirstLetter(name.replace('_', ' '));
}
var Sign = (function () {
    function Sign(name, displayName, orientation, backgroundColor, unformattedText, tags, imageUrlSmall) {
        if (unformattedText === void 0) { unformattedText = ''; }
        if (tags === void 0) { tags = []; }
        if (imageUrlSmall === void 0) { imageUrlSmall = PLACEHOLDER_IMG_URL; }
        this.guid = guid_1.Guid.getNewGuid();
        this.name = name;
        this.displayName = displayName || createDisplayName(name);
        this.orientation = orientation || Orientation.horizontal;
        this.backgroundColor = backgroundColor || new color_1.Color('ffffff');
        this.unformattedText = unformattedText;
        this.tags = tags;
        this.imageUrlSmall = imageUrlSmall;
    }
    return Sign;
}());
exports.Sign = Sign;
