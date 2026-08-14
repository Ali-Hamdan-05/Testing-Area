// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

// Global Variables
export const collections: { games?: mongoDB.Collection } = {};

// Intialize Connection
export async function connectToDatabase() {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
        process.env.MONGODB_URI as string,
    );

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME as string);
    const gamesCollection: mongoDB.Collection = db.collection(
        process.env.GAMES_COLLECTION_NAME as string,
    );
    collections.games = gamesCollection;

    console.log(
        `Successfully connected to DB: ${db.databaseName} and collection ${gamesCollection.collectionName}`,
    );
}
