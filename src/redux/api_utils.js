import queryString from "qs";

export function buildURLRequestString(rootURL, qsData) {
    try {
        const qs = queryString.stringify(qsData.qs),
        requestStr = `${rootURL}${qsData.verb}?${qs}`;
        //console.log(`buildURLRequestString: ${requestStr}`);
        return requestStr;
    } catch (error) {
        throw error;
    }
}