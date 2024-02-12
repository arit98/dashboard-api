import { MongoClient } from 'mongodb';
import fs from "fs"

const uri = "mongodb+srv://arit98:W2wxsfaWWY62ShXP@cluster0.d0ztw1f.mongodb.net/dashboard-api";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let data = fs.readFileSync("./jsondata.json").toString()
data = JSON.parse(data)

async function main() {
    try {
        await client.connect();

        const database = client.db("dashboard-api");
        const collection = database.collection("datas");

        await collection.insertMany(data);

        console.log("Data inserted successfully!");
    } catch (error) {
        console.error("Error:", error);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
