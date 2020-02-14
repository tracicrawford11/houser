import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Header extends Component {
    constructor () {
        super()
        this.state = {

        }
    }
    render () {
        return (
            <div>
                <h1>Header Component</h1>
            </div>
        )
    }
}

export default Header