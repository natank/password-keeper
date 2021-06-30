"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
function postLogin(req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (username && password && username === 'abc' && password === '123456') {
        //Sing JWT, valid for 1 hour
        var token = jsonwebtoken_1.default.sign({}, config_1.default.accessSecret, { expiresIn: '1h' });
        res.status(200).send(token);
    }
    else {
        res.status(401).end();
    }
}
exports.postLogin = postLogin;
