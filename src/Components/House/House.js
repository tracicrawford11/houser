import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class House extends Component {
    constructor () {
        super()
        this.state = {

        }
    }
    render () {
        return (
            <div>
                <h1>House Component</h1>
                <button>Delete</button>
            </div>
        )
    }
}

export default House