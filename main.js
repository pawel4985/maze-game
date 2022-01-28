let actual_lvl = 1
let act = ""
window.ondragstart = function () {
    return false;
}
window.addEventListener('resize', function () {
    window.location.reload()
})
const game = document.getElementById("game")
const lvl = document.getElementById('lvl')
const play = document.getElementsByTagName("Button")[0]
const player = document.getElementById("player")
const time = document.getElementById("time")
const lvl_counter = document.getElementById("level")

function maze() {
    level01()
}

function level01() {
    if (actual_lvl == 1) {
        p_y = 480
        p_x = 160
        lvl.src = 'levels/' + actual_lvl + '.jpg'
        player.style.top = p_y + "px"
        player.style.left = p_x + "px"
        collisions = setInterval(function () {
            if (p_x < 140 && p_y >= 260) {
                p_y = 480
                p_x = 160
                player.style.top = p_y + "px"
                player.style.left = p_x + "px"
            }
            if (p_y < 260 && p_x < 360) {
                p_y = 480
                p_x = 160
                player.style.top = p_y + "px"
                player.style.left = p_x + "px"
            }
            if (p_y > 300 && p_x > 180) {
                p_y = 480
                p_x = 160
                player.style.top = p_y + "px"
                player.style.left = p_x + "px"
            }
            if (p_x > 400) {
                p_y = 480
                p_x = 160
                player.style.top = p_y + "px"
                player.style.left = p_x + "px"
            }
            if (p_y > 480) {
                p_y = 480
                p_x = 160
                player.style.top = p_y + "px"
                player.style.left = p_x + "px"
            }
            if (p_y < 0) {
                clearInterval(collisions)
                actual_lvl++
                lvl_counter.innerHTML = "Level: " + actual_lvl
                level02()
            }
        }, 10)
    }
}

function level02() {
    p_y = 480
    p_x = 100
    lvl.src = 'levels/' + actual_lvl + '.jpg'
    player.style.top = p_y + "px"
    player.style.left = p_x + "px"

    collisions = setInterval(function () {

        if (p_y < 0) {
            clearInterval(collisions)
            clearInterval(time_counter)
            actual_lvl++
            lvl_counter.innerHTML = "Level: " + actual_lvl
        }
    }, 10)
}

rightPressed = false;
leftPressed = false;
upPressed = false;
downPressed = false;

function move() {
    if (rightPressed == true) {
        p_x += 1
        player.style.left = p_x + "px"
    }
    if (leftPressed == true) {
        p_x -= 1
        player.style.left = p_x + "px"
    }
    if (upPressed == true) {
        p_y -= 1
        player.style.top = p_y + "px"
    }
    if (downPressed == true) {
        p_y += 1
        player.style.top = p_y + "px"
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

setInterval(move, 1)

function keyDownHandler(e) {
    if (((e.key == "Right" || e.key == "ArrowRight" || e.key == "d") || (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") || (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") || (e.key == "Down" || e.key == "ArrowDown" || e.key == "s")) && typeof seconds == "undefined") {
        timer()
    }
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
        leftPressed = true;
    } else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
        upPressed = true;
    } else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
        leftPressed = false;
    } else if (e.key == "Up" || e.key == "ArrowUp" || e.key == "w") {
        upPressed = false;
    } else if (e.key == "Down" || e.key == "ArrowDown" || e.key == "s") {
        downPressed = false;
    }
}

function timer() {
    if (typeof seconds == "undefined") {
        seconds = 0
        miliseconds = 0
        minutes = 0
        time_counter = setInterval(timer, 10)
    }
    miliseconds = parseInt(miliseconds)
    seconds = parseInt(seconds)
    minutes = parseInt(minutes)
    miliseconds += 1;

    if (miliseconds == 99) {
        seconds += 1;
        miliseconds = 0;
    }
    if (seconds == 60) {
        minutes += 1;
        seconds = 0;
        miliseconds = 0;
    }

    if (miliseconds < 10 || miliseconds == 0) {
        miliseconds = '0' + miliseconds;
    }
    if (seconds < 10 || seconds == 0) {
        seconds = '0' + seconds;
    }
    if (minutes < 10 || minutes == 0) {
        minutes = '0' + minutes;
    }
    time.innerHTML = minutes + ":" + seconds + ":" + miliseconds
}

//mobile port

if (window.innerWidth < 901) {
    w_button = document.getElementById('w_button')
    a_button = document.getElementById('a_button')
    s_button = document.getElementById('s_button')
    d_button = document.getElementById('d_button')

    function mobile_kd(widget) {
        if ((widget.value == "w" || widget.value == "a" || widget.value == "s" || widget.value == "d") && (typeof hold == "undefined" || hold == "checked")) {
            if (typeof seconds == "undefined") {
                timer()
            }
        }
        if (widget.value == "w") {
            upPressed = true;
        } else {
            upPressed = false;
        }
        if (widget.value == "s") {
            downPressed = true;
        } else {
            downPressed = false;
        }
        if (widget.value == "a") {
            leftPressed = true;
        } else {
            leftPressed = false;
        }
        if (widget.value == "d") {
            rightPressed = true;
        } else {
            rightPressed = false;
        }
    }

    function mobile_ku(widget) {
        if ((widget.value == "w" || widget.value == "a" || widget.value == "s" || widget.value == "d") && (typeof hold != "undefined" || hold != "checked")) {
            clearInterval(hold)
            hold = "checked"
        }
    }
}