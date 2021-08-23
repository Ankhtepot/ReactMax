import MeetupDetail from '../../components/meetups/MeetpDetail';

function MeetupDetails() {
    return (
        <>
            <MeetupDetail
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/1280px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG"
                title="First Meetup"
                address='Some adress'
                description='Some description'
            />
        </>
    );
}

export default MeetupDetails;