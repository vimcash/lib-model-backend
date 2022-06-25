"use strict";
exports.__esModule = true;
exports.BBTurnDeviceModel = void 0;
var schema_1 = require("./schema");
var mongoose_1 = require("mongoose");
schema_1.Schema.statics.build = function (atrib) {
    return new exports.BBTurnDeviceModel(atrib);
};
exports.BBTurnDeviceModel = (0, mongoose_1.model)('Device', schema_1.Schema);
exports["default"] = exports.BBTurnDeviceModel;
