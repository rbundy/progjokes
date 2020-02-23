document.getElementById("joke-btn").addEventListener("click", function(event) {
    document.getElementById("joke-btn").disabled = true;
    event.preventDefault();

    document.getElementById("setup").innerHTML = ""
    document.getElementById("punchline").innerHTML = ""

    const url = "https://official-joke-api.appspot.com/jokes/programming/random"
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(async function(json) {
            await typeWriter(json[0].setup, "setup")
            await sleep(2000)
            await typeWriter(json[0].punchline, "punchline")
            document.getElementById("joke-btn").disabled = false;
        });
});



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function typeWriter(txt, id) {
    var i = 0;
    var speed = 50;
    while (i < txt.length) {
        document.getElementById(id).innerHTML += txt.charAt(i);
        i++;
        await sleep(speed)
    }
}