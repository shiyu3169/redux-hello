import React from 'react'
import ReactDOM from 'react-dom'

const HelloWorld = ({message}) => 
<div>
    <h1>Hello World</h1>
    <h2>{message}</h2>
</div>

ReactDOM.render(
    <HelloWorld message="Life is good!"/>, document.getElementById('root')
)