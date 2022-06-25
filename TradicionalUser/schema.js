"use strict";
exports.__esModule = true;
exports.Schema = void 0;
var mongoose_1 = require("mongoose");
exports.Schema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
        uppercase: true
    },
    lastName: {
        type: String,
        required: true,
        uppercase: true
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String,
        lowecase: true
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
