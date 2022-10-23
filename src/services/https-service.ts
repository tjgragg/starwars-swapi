const fetch = require('node-fetch');

export const sendRequest = async (url: string) => {
    console.log('url', url);
    return fetch(url);
}

const BASE_URL = "https://swapi.dev/api";
export const getResourceList = async (resourceName: string) => {
    const first = await sendRequest(`${BASE_URL}/${resourceName}`);
    let res = await first.json();
    const list = res.results;
    while (res.next) {
        const httpres = await sendRequest(res.next);
        res = await httpres.json();
        list.push(...res.results);
    }
    return list;
}
