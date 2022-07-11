import { useRouter } from 'next/router';

import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetails = props => {
    const router = useRouter();

    const { image, title, address, description } = props.meetupData;

    return (
        <MeetupDetail 
            image={image}
            title={title}
            address={address}
            description={description}
        />
    );
};

export function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    //fetch data for the specific meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props: {
            meetupData: {
                id: 'm1',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                title: 'First Meetup',
                address: 'Some Street 5, Some City',
                description: 'This is the first community meetup'
            }
        }
    }

}

export default MeetupDetails;