"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = __importDefault(require("./middlewares"));
const constants_1 = require("./configs/constants");
const simpleRoute_1 = require("./routes/simpleRoute");
const app = (0, express_1.default)();
(0, middlewares_1.default)(app);
app.use(simpleRoute_1.simpleRoute);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
const port = constants_1.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
exports.default = app;
