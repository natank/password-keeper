"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePassword = exports.putPassword = exports.getPassword = exports.postPassword = void 0;
function postPassword(req, res) {
    var _a = req.body, service = _a.service, password = _a.password;
    if (true) {
        res.status(200).send();
    }
    else {
        res.status(401).end();
    }
}
exports.postPassword = postPassword;
function getPassword(req, res) {
    var service = req.body.service;
    if (true) {
        res.status(200).send();
    }
    else {
        res.status(401).end();
    }
}
exports.getPassword = getPassword;
function putPassword(req, res) {
    var _a = req.body, service = _a.service, password = _a.password;
    if (true) {
        res.status(200).send();
    }
    else {
        res.status(400).end();
    }
}
exports.putPassword = putPassword;
function deletePassword(req, res) {
    var service = req.body.service;
    if (true) {
        res.status(200).send();
    }
    else {
        res.status(400).end();
    }
}
exports.deletePassword = deletePassword;
