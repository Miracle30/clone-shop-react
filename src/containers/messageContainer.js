import React, { Component } from "react";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Message from "../components/message";

class messageContainer extends Component {
    
    render() {
        var { message } = this.props;
        return (
            //gọi component message
            <Message message={message}/>
        );
    }
}
    
messageContainer.propTypes = {
    message : PropTypes.string.isRequired
}



const mapStateToProps = state => {
    return{
       message : state.MessageReducer 
    }
}


export default connect (mapStateToProps, null) (messageContainer)