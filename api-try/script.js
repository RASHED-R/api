function doSOmething() {
    fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            document.getElementById("activity").innerText = data.activity;
        })
}
doSOmething();

setInterval(() => {
    doSOmething()
}, 10000); //setInterval dia 10 sec por por auto change hoy.