import axios from "axios";
import _ from 'lodash';
import qs from "qs";

import { buildURLRequestString } from "./api_utils";

const JSON_PL_ROOT_URL = 'http://localhost:3000/';
const JSON_PL_API_KEY = ''
/**
 * 
 * FETCH LIST OF DUMMY PHOTOS (JSON)
 */
const ACTION_FETCH_PHOTOS = 'fetch_photos';
const QS_FETCH_PHOTOS = {
    verb: 'json/photos.json',
    qs: {
        key: JSON_PL_API_KEY,
    }
};
export function fetchPhotos() {
    const requestStr = buildURLRequestString(JSON_PL_ROOT_URL, QS_FETCH_PHOTOS);
    const request = axios.get(requestStr);
    return {
        type: ACTION_FETCH_PHOTOS,
        payload: request
    }    
}

// const YT_API_ROOT_URL = 'https://www.googleapis.com/youtube/v3/';
// const YT_API_KEY = 'AIzaSyAknG794fyd_5tOqgi1PuyGqepxNSGJO';
/**
 * 
 * FETCH LIST OF DUMMY DATA
 */
//  const ACTION_SEARCH_VIDEOS = 'search_videos';
// const QS_SEARCH_VIDEOS = {
//     verb: 'search',
//     qs: {
//         part: 'snippet',
//         maxResults: 25,
//         q: 'surfing',
//         key: YT_API_KEY,
//     }
// };
// export function fetchVideos() {
//     const qstr = (qs.stringify(QS_SEARCH_VIDEOS.qs));
//     const requestStr = `${YT_API_ROOT_URL}${QS_SEARCH_VIDEOS.verb}?${qstr}`;
//     console.log(requestStr);
//     const request = axios.get(requestStr);
//     return {
//         type: ACTION_FETCH_LIST,
//         payload: request
//     }    
// }

/**
 * 
 * MAIN REDUCER
 */
export function reducer (state = null, action) {
    switch (action.type) {

        // case ACTION_SEARCH_VIDEOS:
        //     return action.payload.data;

        case ACTION_FETCH_PHOTOS:
            return action.payload.data;
            
        default:
            return state;
    }
}