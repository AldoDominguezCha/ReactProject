import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = props => {
    const router = useRouter();

    const { image, title, address, description } = props.meetupData;

    return (
        <Fragment>
            <Head>
                <title>{title}</title>
                <meta 
                    name='description'
                    content={description}
                />
            </Head>
            <MeetupDetail 
                image={image}
                title={title}
                address={address}
                description={description}
            />
        </Fragment>
    );
};

export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://root:ThisIsTheCode1!@cluster0.ntlux.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    
    const meetupIds = await meetupsCollection.find({}, { _id: 1 }).toArray();
    console.log(meetupIds);
    
    client.close();


    return {
        fallback: false,
        paths: meetupIds.map(meetup => ({
            params: {
                meetupId: meetup._id.toString(),
            }
        }))
    }
}

export async function getStaticProps(context) {
    //fetch data for the specific meetup

    const meetupId = context.params.meetupId;
    
    const client = await MongoClient.connect('mongodb+srv://root:ThisIsTheCode1!@cluster0.ntlux.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    
    const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });
    console.log(selectedMeetup);
    
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            }
        }
    }

}

export default MeetupDetails;