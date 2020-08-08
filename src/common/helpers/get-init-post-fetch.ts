const HEADERS = new Headers([['Content-Type', 'application/json']])

const getInitPostFetch = data => {
    return {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(data),
    }
}

export default getInitPostFetch
