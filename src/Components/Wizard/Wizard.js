import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Wizard extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: ''
        }
    }
    handleClick = (e) => {
        e.preventDefault()
        const {name, address, city, state, zip} = this.state
        let body = {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip
        }
        axios.post('/api/houses', body)
        .then(response => {
            this.setState({houses: response.data})
        })
    }
    render () {
        return (
            <div>
                <form>
                <input placeholder="Name" onChange={e => this.setState({name: e.target.value})} />
                <input placeholder="Address" onChange={e => this.setState({address: e.target.value})} />
                <input placeholder="City" onChange={e => this.setState({city: e.target.value})} />
                <input placeholder="State" onChange={e => this.setState({state: e.target.value})} />
                <input placeholder="Zip Code" onChange={e => this.setState({zip: e.target.value})} />

                <Link to ="/Components/Dashboard/Dashboard"><button className='btn'>Cancel</button></Link>
                <button onClick={this.handleClick}>Complete</button>
                </form>
                {Wizard.map(val => { 
                    return (
                        <div className='wizard'>
                            <h1>{val.name}</h1>
                            <h1>{val.address}</h1>
                            <h1>{val.city}</h1>
                            <h1>{val.state}</h1>
                            <h1>{val.zip}</h1>
                        </div>
                    )})}
            </div>
        )
    }
}

export default Wizard