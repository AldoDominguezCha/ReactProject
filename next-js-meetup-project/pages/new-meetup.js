import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

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
        <Fragment>
            <Head>
                <title>Add meetup!</title>
                <meta 
                    name='description'
                    content='You can add here your new meetup!'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
    );
};

export default NewMeetup;