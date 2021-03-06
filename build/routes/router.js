"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authRoutes_1 = require("./authRoutes");
var passwordsRoutes_1 = require("./passwordsRoutes");
var router = express_1.Router();
exports.router = router;
router.use('/auth', authRoutes_1.authRoutes);
router.use('/passwords', passwordsRoutes_1.passwordsRoutes);
