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
//
export function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export default HomePage;
