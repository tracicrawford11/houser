import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Header from '../../Components/Header/Header'

class Dashboard extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            img: '',
            houses: []
        }
    }
    componentDidMount() {
        axios.get('/api/houses').then(response => {
            this.setState ({houses: response.data})
        })
    }
    deleteHouse = () => {
        axios.delete(`/api/houses/${this.state.idInput}`)
        .then(response => {
            this.setState({houses: response.data})
        })
    }

    render () {
        let {dashboard} = this.state
        return (
            <div>
                <form>
                    <h1>Dashboard Component</h1>
                    <button className='add' onClick ="/Components/Wizard/Wizard">Add New Property</button>
                </form>
                
                < Header />
            </div>
        )
    }
}

export default Dashboard
