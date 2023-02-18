"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set('strictQuery', false);
const connectDB = () => {
    const DB = process.env.DB || "undefined";
    mongoose_1.default.connect(DB).then(() => {
        console.log("database is connected");
    }).catch((err) => {
        console.log("database is not connected");
    });
};
exports.default = connectDB;
