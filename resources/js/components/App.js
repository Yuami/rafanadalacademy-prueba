import React from 'react'
import ReactDOM from 'react-dom'
import Player from '../view/Player'

function App () {
    return (
        <>
            <Player/>
        </>
    )
}

export default App

const app = document.getElementById('app')
ReactDOM.render(<App/>, app)

