import axios from "axios";
import _ from 'lodash';
import qs from "qs";

const JSON_PL_ROOT_URL = 'https://jsonplaceholder.typicode.com/';
const JSON_PL_API_KEY = ''
/**
 * 
 * FETCH LIST OF DUMMY PHOTOS (JSON)
 */
const ACTION_FETCH_PHOTOS = 'fetch_photos';
const QS_FETCH_PHOTOS = {
    verb: 'photos',
    qs: {
        key: JSON_PL_API_KEY,
    }
};
export function fetchPhotos() {
    const qstr = (qs.stringify(QS_FETCH_PHOTOS.qs));
    const requestStr = `${JSON_PL_ROOT_URL}${QS_FETCH_PHOTOS.verb}?${qstr}`;
    console.log(requestStr);
    const request = axios.get(requestStr);
    return {
        type: ACTION_FETCH_PHOTOS,
        payload: request
    }    
}

/**
 * 
 * MAIN REDUCER
 */
export function reducer (state = null, action) {
    switch (action.type) {

        case ACTION_FETCH_PHOTOS:
            return action.payload.data;
            
        default:
            return state;
    }
}