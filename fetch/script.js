const url = "https://jsonplaceholder.typicode.com/todos/10"

fetch(url)
    .then((res) => {
        if (!res.ok) {
            const message = `Error: ${res.status}`
            throw new Error(message)
        }
        return res.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })