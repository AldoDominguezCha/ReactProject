import { Fragment } from 'react';
import { useRouter } from 'next/router';

const NewDetails = props => {
    const router = useRouter();
    console.log(`The ID: ${router.query.newsId}`);
    return (
        <Fragment>
            <h1>This is the new details page!</h1>
            <p>This is the ID you provided: {router.query.newsId}</p>
        </Fragment>
    );
};

export default NewDetails;