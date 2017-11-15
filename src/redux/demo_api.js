import axios from "axios";
import { buildURLRequestString } from "./api_utils";

const JSON_PL_ROOT_URL = 'http://192.168.1.16:3000/';
const JSON_PL_API_KEY = '';
/**
 * 
 * FETCH LIST OF DUMMY FEED (JSON)
 * from: https://jsonplaceholder.typicode.com/photos
 */
const ACTION_FETCH_FEED = 'fetch_feed';
const QS_FETCH_FEED = {
    verb: 'json/feed.json',
    qs: {
        key: JSON_PL_API_KEY,
    }
};
export function fetchFeed() {
    const requestStr = buildURLRequestString(JSON_PL_ROOT_URL, QS_FETCH_FEED);
    const request = axios.get(requestStr);
    return {
        type: ACTION_FETCH_FEED,
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

        case ACTION_FETCH_FEED:
            return action.payload.data;
            
        default:
            return state;
    }
}