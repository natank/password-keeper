"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = require("./routes/router");
var cookie_session_1 = __importDefault(require("cookie-session"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
var allowedOrigins = ['http://localhost:3000'];
var options = {
    origin: allowedOrigins,
};
app.use(cors_1.default(options));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['ladksfj'] }));
app.use(router_1.router);
app.listen(3000, function () {
    console.log('Listenning on port 3000');
});
