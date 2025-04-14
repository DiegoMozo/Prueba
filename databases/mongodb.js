import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';
const MongoURL = isProduction 
    ? process.env.MONGO_URL
    : process.env.LOCAL_MONGO_URL;

const conectMongo = async () => {
    try {
        //const mongoURL = "mongodb://0.0.0.0:27017/Profiles"
        const client = await MongoClient.connect(MongoURL);
        return client.db();
    } catch(err) {
        console.error(err);
    }
};

export default conectMongo;