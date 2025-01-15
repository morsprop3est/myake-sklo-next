require('dotenv').config();
const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");
const postOfficeRoutes = require("./routes/postOfficeRoutes");
const cityRoutes = require("./routes/cityRoutes");
const sequelize = require("./db");

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
    store: new SequelizeStore({
        db: sequelize,
    }),
}));

app.use(cors());
app.use(bodyParser.json());

app.use("/api/cities", cityRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/post-office", postOfficeRoutes);

sequelize.authenticate()
    .then(() => {
        console.log("Connected to the MySQL database.");
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err);
        process.exit(1);
    });

const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});