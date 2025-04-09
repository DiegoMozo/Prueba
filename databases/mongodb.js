import { MongoClient } from "mongodb";

const conectMongo = async () => {
    try {
        const mongoURL = "mongodb://0.0.0.0:27017/Profiles"
        const client = await MongoClient.connect(mongoURL);
        return client.db();
    } catch(err) {
        console.error(err);
    }
};

export default conectMongo;