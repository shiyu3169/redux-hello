import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import {Provider, connect} from 'react-redux'

const HelloWorld = ({message}) => 
    <div>
        <h1>Hello World</h1>
        <h2>{message}</h2>
    </div>

const stateToPropertyMapper = state => ({
        message: state.message 
    })

const HelloContainer = connect(stateToPropertyMapper)(HelloWorld)

let initialState = {
    message: 'Carpe diem'
}

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <HelloContainer/>
    </Provider>, document.getElementById('root')
   
)