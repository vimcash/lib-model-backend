"use strict";
exports.__esModule = true;
exports.hash = void 0;
var password_1 = require("../services/password");
var hash = function (pass) { return password_1.Password.toHash(pass); };
exports.hash = hash;
