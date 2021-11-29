import axios from 'axios';

const initialState = {
    hours: [],
    loading: false,
}

const REQUEST_CALENDAR_DATA = 'REQUEST_CALENDAR_DATA'
const ADD_HOUR = 'ADD_HOUR'
const DELETE_HOUR = 'DELETE_HOUR'

export const requestCalendarData = () => {

}

export const addHour = () => {

}

export const deleteHour = () => {

}

function calendarReducer (state = initialState, action){
    switch(action.type){

    }
}

export default calendarReducer;