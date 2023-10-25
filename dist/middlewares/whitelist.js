"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitelist = {
    clientOptionsLimited: {
        origin: ['https://a', 'https://b', 'http://localhost:5173'],
        methods: ['GET', 'POST']
    },
    clientOptionsGlobal: {
        origin: 'b',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
};
exports.default = whitelist;
