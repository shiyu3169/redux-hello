import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import {Provider, connect} from 'react-redux'

const HelloWorld = ({message, sendMessage1, sendMessage2}) => 
    <div>
        <h1>Hello World</h1>
        <h2>{message}</h2>
        <button onClick={sendMessage1}>Send Message 1</button>
        <button onClick={sendMessage2}>Send Message 2</button>
    </div>

const stateToPropertyMapper = state => ({
        message: state.message 
    })

const dispatherTopropertyMapper = dispatch => ({
    sendMessage1: () => dispatch({type: "MESSAGE_1"}),
    sendMessage2: () => dispatch({type: "MESSAGE_2"})
})

const HelloContainer = connect(stateToPropertyMapper, dispatherTopropertyMapper)(HelloWorld)

let initialState = {
    message: 'Carpe diem'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MESSAGE_1':
            return {
                message: 'this is message 1'
            }
            case 'MESSAGE_2':
        return {
                message: 'some other message 2'
            }
            default: 
                return state
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <HelloContainer/>
    </Provider>, document.getElementById('root')
   
)