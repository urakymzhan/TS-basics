"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
// middleware
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        // return nothing
        return;
    }
    res.status(403);
    res.send("Not permitted!");
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        if (req.session && req.session.loggedIn) {
            res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href=\"/auth/logout\">Logout</a>\n      </div>\n    ");
        }
        else {
            res.send("\n      <div>\n        <div>You are not logged in</div>\n        <a href=\"/auth/login\">Login</a>\n      </div>\n    ");
        }
    };
    RootController.prototype.getProtected = function (req, res) {
        res.send("Welcome to protected route, logged in user!");
    };
    __decorate([
        decorators_1.get("/protected"),
        decorators_1.use(requireAuth)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        decorators_1.controller("")
    ], RootController);
    return RootController;
}());
