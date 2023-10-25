
const whitelist =  {
    clientOptionsLimited : {
        origin: ['https://a', 'https://b', 'http://localhost:5173'],
        methods:['GET','POST']
    },
    clientOptionsGlobal : {
        origin: 'b',
        methods:['GET','POST','PUT','DELETE'],
    }
}

export default whitelist