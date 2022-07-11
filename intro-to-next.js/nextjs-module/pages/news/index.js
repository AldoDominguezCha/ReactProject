import { Fragment } from 'react';
import Link from 'next/link';

const NewsPage = props => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li><Link  href='/news/nextjs-is-on-the-rise'>NextJS is on the rise</Link></li>
                <li>AWS SAA exam is being updated</li>
                <li>I now have access to Bitbucket</li>
            </ul>
        </Fragment>
    );
};

export default NewsPage;