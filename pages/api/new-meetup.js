//in these folder api in the files we white funcs which contains server side code, api folder always run in the server, never on the client side
// /api/new-meetup
// POST/api/new-meetup => to be sure only post requests will trigure

import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect(
            ``
        );

        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;