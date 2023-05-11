const makeRequest = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        const message = `Error: ${res.status}`
        throw new Error(message);
    }
    const data = await res.json();
    return data;
}
const getData = () => {
    makeRequest('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
};
getData();