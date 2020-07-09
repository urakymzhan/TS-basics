"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./src/routes/loginRoutes");
var app = express_1.default();
// middlewares
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ["asasas"] }));
// routes
app.use(loginRoutes_1.router);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server running on " + PORT);
});
