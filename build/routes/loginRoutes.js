"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var loginController_1 = require("../controllers/loginController");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.post('/login', loginController_1.loginController);
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user ');
});
