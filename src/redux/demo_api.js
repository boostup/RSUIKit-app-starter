import axios from "axios";
import _ from 'lodash';
import qs from "qs";

const ROOT_URL = 'https://jsonplaceholder.typicode.com/';
const API_KEY = ''

/**
 * 
 * FETCH LIST OF DUMMY DATA
 */
const ACTION_FETCH_LIST = 'fetch_list';
const QS_FETCH_LIST = {
    verb: 'photos',
    qs: {
        key: API_KEY,
    }
};
export function fetchList() {
    const qstr = (qs.stringify(QS_FETCH_LIST.qs));
    const requestStr = `${ROOT_URL}${QS_FETCH_LIST.verb}?${qstr}`;
    console.log(requestStr);
    const request = axios.get(requestStr);
    return {
        type: ACTION_FETCH_LIST,
        payload: request
    }    
}

/**
 * 
 * MAIN REDUCER
 */
export function reducer (state = null, action) {
    switch (action.type) {

        case ACTION_FETCH_LIST:
            return action.payload.data;
            
        default:
            return state;
    }
}