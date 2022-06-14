//in these folder api in the files we white funcs which contains server side code, api folder always run in the server, never on the client side
// /api/new-meetup
// POST/api/new-meetup => to be sure only post requests will trigure

import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect(
            `mongodb+srv://dilyana:Telenor1@cluster0.y9hbarb.mongodb.net/meetups?retryWrites=true&w=majority`
        );

        const db = client.db();

        const meetupsCollection = db.collection('meetings');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;