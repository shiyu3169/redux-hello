import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import HelloContainer from './containers/HelloContainer'
import { reducer } from './reducers';


const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <HelloContainer/>
    </Provider>, document.getElementById('root')
)