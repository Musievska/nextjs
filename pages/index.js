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


function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;
