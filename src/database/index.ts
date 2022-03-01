import { MongoClient } from "mongodb";
import { Database } from "../lib/types";

const url = `mongodb://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net:27017,${process.env.DB_CLUSTER}.mongodb.net:27017,${process.env.DB_CLUSTER}.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-esc9xp-shard-0&authSource=admin&retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url);
  const db = client.db("tinyhouse");

  return {
    listings: db.collection("test_listings"),
  };
};
