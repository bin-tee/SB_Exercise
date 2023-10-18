// Starting from(time)

function countDown(time) {
    if (time > 0) {
        console.log(time);
        time--;
        setTimeout(function () {
            countDown(time)
        }, 1000)
    } else {
        console.log("DONE!");
    }
}

function countDown(time) {
    if (time > 0) {
        console.log(time);
        setTimeout(function () {
            countDown(time - 1);
        }, 1000)
    } else {
        console.log("DONE!")
    }
}

function countDown(time) {
    let timer = setInterval(function () {
        if (time > 0) {
            console.log(time);
            time--;
        } else {
            clearInterval(timer);
            console.log("Done!")
        }
    }, 1000)
}

function countDown(time) {
    let timer = setInterval(function () {
        if (time <= 0) {
            clearInterval(timer)
            console.log("Done!")
        } else {
            console.log(time)
            time--
        }
    }, 1000)
}



// Starting from (time-1)

function countDown(time) {
    if (time > 1) {
        time--;
        console.log(time);
        setTimeout(function () {
            countDown(time)
        }, 1000)
    } else {
        console.log("DONE!");
    }
}

// function countDown(time) {
//     if (time <= 0) {
//         console.log("DONE!")
//     } else {
//         setTimeout(function () {
//             countDown(time - 1);
//             console.log(time);
//         }, 1000)
//     }
// }

function countDown(time) {
    let timer = setInterval(function () {
        if (time > 1) {
            time--;
            console.log(time);
        } else {
            clearInterval(timer);
            console.log("DONE!");
        }
    }, 1000);
}

function countDown(time) {
    let timer = setInterval(function () {
        time--;
        if (time <= 0) {
            clearInterval(timer);
            console.log("DONE!");
        } else {
            console.log(time);
        }
    }, 1000)
}

countDown(5)