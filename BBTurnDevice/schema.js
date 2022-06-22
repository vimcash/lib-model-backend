"use strict";
exports.__esModule = true;
exports.Schema = void 0;
var mongoose_1 = require("mongoose");
var vcl_interface_1 = require("vcl-interface");
exports.Schema = new mongoose_1.Schema({
    companyID: {
        type: String,
        required: true
    },
    deviceNickname: {
        type: String,
        required: true,
        lowercase: true
    },
    deviceNumber: {
        type: String,
        required: true
    },
    deviceStatus: {
        type: String,
        required: true,
        "enum": Object.values(vcl_interface_1.DeviceStatus),
        "default": vcl_interface_1.DeviceStatus.user
    },
    createdAt: {
        type: mongoose_1.Schema.Types.Date,
        "default": Date.now
    },
    createdBy: {
        type: String,
        lowercase: true
    },
    udpatedAt: {
        type: mongoose_1.Schema.Types.Date,
        "default": Date.now
    },
    updatedBy: {
        type: String,
        lowercase: true
    }
}, {
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});
