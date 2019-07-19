const app = require('./app');

const authRouter = require('../routers/auth');
const productRouter = require('../routers/product');
const userRouter = require('../routers/user');
const cartRouter = require('../routers/cart');
const indexRouter = require('../routers/index');

const apiPrefix = '/api/v1';

app.use(`${apiPrefix}/user`, userRouter);
app.use(`${apiPrefix}/auth`, authRouter);
app.use(`${apiPrefix}/product`, productRouter);
app.use(`${apiPrefix}/cart`, cartRouter);
app.use(`${apiPrefix}/index`, indexRouter);