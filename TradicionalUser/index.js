"use strict";
exports.__esModule = true;
exports.TradicionalUserModel = void 0;
var schema_1 = require("./schema");
var mongoose_1 = require("mongoose");
schema_1.Schema.statics.build = function (atrib) {
    return new exports.TradicionalUserModel(atrib);
};
exports.TradicionalUserModel = (0, mongoose_1.model)('User', schema_1.Schema);
exports["default"] = exports.TradicionalUserModel;
