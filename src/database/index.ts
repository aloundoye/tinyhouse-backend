import { MongoClient } from "mongodb";
import {Database} from "../lib/types";
const user = "alou";
const userPassword = "1pkGDX0nPb0l6UNQ";
const cluster = "cluster0.yluko";

const url = `mongodb+srv://${user}:${userPassword}@${cluster}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url);
  const db = client.db("tinyhouse");

  return {
    listings: db.collection("test_listings"),
  };
};
