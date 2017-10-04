import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-details';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {   }
       
    }
    render() {
        return (
            <div>
               <h3>Username List</h3>
               <UserList />
               <hr/>
               <h3>User Details</h3>
               <UserDetail />
            </div>);
    }
}

export default App;