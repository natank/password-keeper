"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUpdateToken = exports.postLogin = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
function postLogin(req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (username && password && username === 'abc' && password === '123456') {
        //Sing JWT, valid for 1 hour
        var access_token = jsonwebtoken_1.default.sign({ username: username }, config_1.default.accessSecret, {
            expiresIn: 5 * 60,
        });
        var refresh_token = jsonwebtoken_1.default.sign({ username: username }, config_1.default.refreshSecret, {
            expiresIn: 15 * 60,
        });
        res.status(200).json({ access_token: access_token, refresh_token: refresh_token });
    }
    else {
        res.status(401).end();
    }
}
exports.postLogin = postLogin;
function postUpdateToken(req, res) {
    var _a;
    var _b = req.body, username = _b.username, password = _b.password;
    var token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    try {
        jsonwebtoken_1.default.verify(token, config_1.default.refreshSecret);
        var access_token = jsonwebtoken_1.default.sign({ username: username }, config_1.default.accessSecret, {
            expiresIn: 5 * 60,
        });
        var refresh_token = jsonwebtoken_1.default.sign({ username: username }, config_1.default.refreshSecret, {
            expiresIn: 15 * 60,
        });
        res.status(200).json({ access_token: access_token, refresh_token: refresh_token });
    }
    catch (error) {
        res.status(401).end();
    }
    if (username && password && username === 'abc' && password === '123456') {
        //Sing JWT, valid for 1 hour
        var access_token = jsonwebtoken_1.default.sign({ username: username }, config_1.default.accessSecret, {
            expiresIn: 5 * 60,
        });
        var refresh_token = jsonwebtoken_1.default.sign({ username: username }, config_1.default.refreshSecret, {
            expiresIn: 15 * 60,
        });
        res.status(200).json({ access_token: access_token, refresh_token: refresh_token });
    }
    else {
        res.status(401).end();
    }
}
exports.postUpdateToken = postUpdateToken;
