import { Fragment } from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name='description'
                    content='Browse a huge list of highly active React meetups!'
                />
            </Head>
            <MeetupList meetups={props.meetups} />;
        </Fragment>
    );
}


//this only work in pages folder!!!
//it is async and return promise
//it is able to load data before this component function is execuited so it can be redndered with required data
//any code can be written it wont be on client side!
//always must return a {}
//if data is change too often use revalidate property, it unlock feature incremental static deneration
//https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration
// export async function getStaticProps() {
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate: 1
//     }
// }

//dont run in build process, instead always on the server after deployment
export async function getStaticProps() {
    // fetch data from an API
    const client = await MongoClient.connect(
        `mongodb+srv://dilyana:Telenor1@cluster0.y9hbarb.mongodb.net/meetups?retryWrites=true&w=majority`
    )
    //used when you use auth
    //fetch data from api, always run on the server- never in the client 
    //runs on every coming reques and does not use revalidate
    const db = client.db();

    const meetupsCollection = db.collection('meetings');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1,
    };
}

export default HomePage;
