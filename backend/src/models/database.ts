import Mongoose from "mongoose";
import dotenv from "dotenv";
import CONFIG from "../utils/config";


dotenv.config();

const url = process.env.NODE_ENV == 'test' ? CONFIG.DBTESTURL : CONFIG.DBURL

Mongoose.connect(url);
export default Mongoose.connection;
