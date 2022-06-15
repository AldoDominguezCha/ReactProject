import { Component } from 'react';

class ErrorBoundary extends Component {

    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error) {
        //This life cycle method will be triggered whenever a child component throws an error
        console.log('The component did catch method got triggered!');

        this.setState({
            hasError: true,
        });
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong :(</p>
        }

        return this.props.children;
    }

};

export default ErrorBoundary;