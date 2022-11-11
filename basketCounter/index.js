let subtitleHome = document.getElementById("subtitle-home")
let subtitleGuest = document.getElementById("subtitle-guest")
let counter = 0

function plusone() {
    counter += 1
    subtitleHome.textContent = counter
}

function plustwo() {
    counter += 2
    subtitleHome.textContent = counter
}

function plusthree() {
    counter += 3
    subtitleHome.textContent = counter
}

function plusoneguest() {
    counter += 1
    subtitleGuest.textContent = counter
}

function plustwoguest() {
    counter += 2
    subtitleGuest.textContent = counter
}

function plusthreeguest() {
    counter += 3
    subtitleGuest.textContent = counter
}

function reset() {
    subtitleGuest.textContent = 0
    subtitleHome.textContent = 0
    counter = 0
}