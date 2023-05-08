import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from './routes/user.js';
import playGroupRoutes from './routes/groupnames.js';
import groupPlayersRoutes from './routes/groupplayers.js';
import wishlistRoutes from './routes/wishlist.js';
import productRoutes from './routes/products.js';
import friendRoutes from './routes/friend.js';

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.use("/giftuser", userRoutes);
app.use("/group", playGroupRoutes);
app.use("/players", groupPlayersRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/products", productRoutes);
app.use("/friend", friendRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`))
}).catch((error) => console.log(`${error} did not connect`));