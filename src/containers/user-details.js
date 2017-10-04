import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return(<div>Select a user !!</div>);
        }
        return(
            <div>
                <img src={this.props.user.thumbnail}/>
                <p>{this.props.user.first} {this.props.user.last}</p>
                <p>{this.props.user.age} </p>
                <p>{this.props.user.description}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);