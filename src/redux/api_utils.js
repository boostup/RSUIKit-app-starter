import queryString from "qs";

export function buildURLRequestString(rootURL, qsData) {
    try {
        const requestStr = queryString.stringify(qsData.qs);
        console.log(requestStr);
        return `${rootURL}${qsData.verb}?${requestStr}`;
    } catch (error) {
        throw error;
    }
}