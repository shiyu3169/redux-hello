import { connect } from 'react-redux'
import { HelloWorld } from '../components/HelloWorld';
import { MESSAGE_1, MESSAGE_2 } from '../actions';


const stateToPropertyMapper = state => ({
        message: state.message 
    })

const dispatherTopropertyMapper = dispatch => ({
        sendMessage1: () => dispatch({type: MESSAGE_1}),
        sendMessage2: () => dispatch({type: MESSAGE_2})
    })

const HelloContainer = connect(stateToPropertyMapper, dispatherTopropertyMapper)(HelloWorld)

export default HelloContainer