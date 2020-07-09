"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var express_1 = __importDefault(require("express"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
var app = express_1.default();
// middlewares
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ["asasas"] }));
// routes
app.use(AppRouter_1.AppRouter.getInstance());
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server running on " + PORT);
});
