import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 1,
        title: 'A first dummy meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/20100213_Zlatograd_Bulgaria_3.jpg',
        adress: 'Zlatograd',
        description: 'First meetup in Zlatograd'

    },
    {
        id: 2,
        title: 'A second dummy meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/20100213_Zlatograd_Bulgaria_3.jpg',
        adress: 'Zlatograd',
        description: 'Second meetup in Zlatograd'
    }

];


function HomePage(props) {

    return <MeetupList meetups={props.meetups} />
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
export async function getServerSideProps(context) {
    const req = context.request;
    const res = context.response;

    //used when you use auth
    //fetch data from api, always run on the server- never in the client 
    //runs on every coming reques and does not use revalidate
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}


export default HomePage;
