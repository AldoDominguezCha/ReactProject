import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {
  render() {
    return <li className={classes.user}>Name: {this.props.name}</li>;
  }

  componentWillUnmount() {
    console.log(`${this.props.name} will unmount!`)
  }
};


export default User;