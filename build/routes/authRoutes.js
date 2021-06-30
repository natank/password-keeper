"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
var express_1 = require("express");
var authController_1 = require("../controllers/authController");
var router = express_1.Router();
exports.authRoutes = router;
router.post('/login', authController_1.postLogin);
router.post('/updateToken', authController_1.postUpdateToken);
