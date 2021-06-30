"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordsRoutes = void 0;
var express_1 = require("express");
var loginController_1 = require("../controllers/loginController");
var router = express_1.Router();
exports.passwordsRoutes = router;
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user ');
});
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send('Not permitted');
}
router.post('/login', loginController_1.loginController);
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user ');
});
