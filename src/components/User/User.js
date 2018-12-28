import React, { Component }from 'react'

class User extends Component {

    constructor(props) {
        super(props);
        console.log('[User.js] inside constractor', props);
      }

    componentWillUnmount() {
        console.log('[User.js] inside componentWIll Unmount - about to remove');
    }
}
export default User;
