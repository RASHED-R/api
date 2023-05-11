// const postInfo1 = {
//     title: 'food',
//     body: 'bard',
//     userId: 1,
// }
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const bodyContent = document.getElementById("bodyContent").value;
    const post = {
        title: title,
        body: bodyContent
    };
    nowPostToServer(post);
})

function nowPostToServer(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(postInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
}