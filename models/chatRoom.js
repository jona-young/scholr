import { MongoClient } from "mongodb";
import ATLAS_URI from "./ApiMethods.js"

const connectionString = ATLAS_URI;

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let ChatRoom = conn.db("sample_training");

export default ChatRoom;