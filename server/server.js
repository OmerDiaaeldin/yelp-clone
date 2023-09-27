"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var cors = require("cors");
var client_1 = require("@prisma/client");
require("dotenv").config();
var prisma = new client_1.PrismaClient();
var app = express();
app.use(cors());
app.use(express.json());
//get data of all restaurants
app.get("/api/v1/restaurants", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurants, obj, _i, restaurants_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.restaurants.findMany()];
            case 1:
                restaurants = _a.sent();
                obj = void 0;
                for (_i = 0, restaurants_1 = restaurants; _i < restaurants_1.length; _i++) {
                    obj = restaurants_1[_i];
                    obj.id = Number(obj.id);
                }
                res.status(200).json({
                    'status': "success",
                    'restaurants': restaurants,
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//get data of single restaurant
app.get("/api/v1/restaurants/:restaurant_id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.restaurants.findUnique({
                        where: {
                            id: BigInt(req.params.restaurant_id),
                        },
                    })];
            case 1:
                restaurant = _a.sent();
                if (restaurant == null) {
                    throw "non-existent";
                }
                else {
                    restaurant.id = Number(restaurant.id);
                }
                res.status(200).json({
                    'status': 'success',
                    'restaurant': restaurant,
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.status(400).json({
                    'status': 'failure',
                    'error': error_2
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//create a restaurant
app.post("/api/v1/restaurants", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.restaurants.create({
                        data: {
                            name: req.body.name,
                            location: req.body.location,
                            price_range: req.body.price_range
                        },
                    })];
            case 1:
                result = _a.sent();
                result.id = Number(result.id);
                res.status(200).json({
                    'status': 'success',
                    'data': result
                });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(400).json({
                    'status': 'failure',
                    'data': error_3
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Update the restaurant data
app.put("/api/v1/restaurants/:restaurant_id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.restaurants.update({
                        data: {
                            name: req.body.name,
                            location: req.body.location,
                            price_range: req.body.price_range
                        },
                        where: {
                            id: BigInt(req.params.restaurant_id)
                        }
                    })];
            case 1:
                result = _a.sent();
                result.id = Number(result.id);
                res.status(200).json({
                    'status': 'success',
                    'data': result
                });
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.status(400).json({
                    'status': 'failure',
                    'data': error_4
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//Delete the restaurant data
app.delete("/api/v1/restaurants/:restaurant_id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.restaurants.delete({
                        where: {
                            id: Number(req.params.restaurant_id)
                        }
                    })];
            case 1:
                result = _a.sent();
                res.status(200).json({
                    'status': 'success',
                });
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                res.status(400).json({
                    'status': 'failure',
                    'data': error_5
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log("server is up and running at port ".concat(port));
});
