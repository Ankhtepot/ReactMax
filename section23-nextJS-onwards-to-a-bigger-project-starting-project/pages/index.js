import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
        address: 'Some address 5, 456123 Some City'
    },
    {
        id: 'm2',
        title: 'second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG',
        address: 'Some address 10, 456123 Some City'
    }
];

function HomePage(props) {
    return (
        <>
            <MeetupList meetups={props.meetups}/>
        </>
    );
}

export async function getStaticProps() {
    // fetch data from an API
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 10
    };
}

export default HomePage;