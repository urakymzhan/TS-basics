"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
var Methods_1 = require("./Methods");
function routeFinder(method) {
    return function get(path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeFinder(Methods_1.Methods.get);
exports.post = routeFinder(Methods_1.Methods.post);
exports.put = routeFinder(Methods_1.Methods.put);
exports.patch = routeFinder(Methods_1.Methods.patch);
exports.del = routeFinder(Methods_1.Methods.del);
