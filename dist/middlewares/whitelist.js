"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const whitelist = {
    clientOptionsLimited: {
        origin: ['https://week-15-mfaisalkemal-a.netlify.app/', 'https://week-15-mfaisalkemal-b.netlify.app/', 'http://localhost:5173'],
        methods: ['GET', 'POST']
    },
    clientOptionsGlobal: {
        origin: 'https://week-15-mfaisalkemal-b.netlify.app/',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
};
exports.default = whitelist;
