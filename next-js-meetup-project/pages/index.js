import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import MeetupList from "../components/meetups/MeetupList";

const HomePage = props => {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta 
                    name='description'
                    content='Browse a huge list of highly active React meetups!'
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     //fetch data from API for example, this code will always run on the server not in the client's browser
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         }
//     }
// };

export async function getStaticProps() {
    //fetch data from API

    const client = await MongoClient.connect('mongodb+srv://root:ThisIsTheCode1!@cluster0.ntlux.mongodb.net/meetups?retryWrites=true&w=majority');

    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    
    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 3600
    };
}

export default HomePage;