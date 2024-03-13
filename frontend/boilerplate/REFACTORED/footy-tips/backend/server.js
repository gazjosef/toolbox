"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var port = process.env.PORT || 5001;
var app = (0, express_1["default"])();
app.get("/api/goals", function (req, res) {
    res.json({ message: "Get goals" });
});
app.listen(port, function () { return console.log("Server started on port ".concat(port)); });
