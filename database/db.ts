import mongoose from "mongoose";
import config from "../config/default";
import Logger from "../core/Logger";

const connectToDb = async () => {
    const dburi = <string>config.db_uri;
    try {
        await mongoose.connect(dburi);
        Logger.info("Database Connected !! 📦");
    } catch (err) {
        Logger.error("DB ERROR : ", err);
        process.exit(1);
    }
}

export default connectToDb;