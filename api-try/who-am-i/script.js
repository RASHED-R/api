// function doSOmething() {
//     fetch("https://www.boredapi.com/api/activity")
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data);
//             document.getElementById("activity").innerText = data.activity;
//         })
// }
// doSOmething();

// setInterval(() => {
//     doSOmething()
// }, 10000); //setInterval dia 10 sec por por auto change hoy.



function callUserName() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            const user = data.results[0];
            const name = user.name;
            const userName = `${name.title} ${name.first} ${name.last}`
            document.getElementById('nameField').innerText = userName;
        })
}
callUserName();

setInterval(() => {
    callUserName()
}, 2000);