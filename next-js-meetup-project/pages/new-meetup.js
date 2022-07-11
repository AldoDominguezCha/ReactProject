import { useRouter } from 'next/router';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = props => {

    const router = useRouter();

    async function addMeetupHandler(enteredMeetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(enteredMeetupData)
        });

        const data = await response.json();
        console.log(data);

        router.replace('/');
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    );
};

export default NewMeetup;