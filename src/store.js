import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    houses: []
}
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
export const UPDATE_CITY = 'UPDATE_CITY'
export const UPDATE_STATE = 'UPDATE_STATE'
export const UPDATE_ZIP = 'UPDATE_ZIP'
export const ADD_IMG = 'ADD_IMG'
export const ADD_MORTGAGE = 'ADD_MORTGAGE'
export const ADD_RENT = 'ADD_RENT'
export const ADD_HOUSE = 'ADD_HOUSE'

function reducer (state = initialState, action) {
    const {type, payload} = action
    switch (type) {
        case UPDATE_NAME:
            return {...state, name: payload}
        case UPDATE_ADDRESS:
            return {...state, address: payload}
        case UPDATE_CITY:
            return {...state, city: payload}
        case UPDATE_STATE:
            return {...state, state: payload}
        case UPDATE_ZIP:
            return {...state, zip: payload}
        case ADD_IMG:
            return {...state, img: payload}
        case ADD_MORTGAGE:
            return {...state, mortgage: payload}
        case ADD_RENT:
            return {...state, rent: payload}
        case ADD_HOUSE:
            const {
                name,
                address,
                city,
                state,
                zip
            } = state
            const house = {
                name,
                address,
                city,
                state,
                zip
            }
            const newHouse = [...state.houses, house]
            return {...state, houses: newHouse}
        default:
            return state
    }
}
export default createStore(reducer)