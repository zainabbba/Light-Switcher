
let lightoff = document.querySelector(".light-off")
let turn = document.querySelector("#turn")

console.log(turn.textContent)
let toggle = true;
lightoff.addEventListener('click', (e) => {

    toggle = !toggle
    if (toggle == true) {
        lightoff.src = "images/lighton.png"
        // lightoff.classList.toggle('light-bg')
        document.body.classList.toggle('light-bg')
        lightoff.classList.toggle('light-off-border')


    }

    else {
        lightoff.src = "images/lightoff.png"
        document.body.classList.remove('light-bg')
        lightoff.classList.remove('light-off-border')
    }

    if (document.body.classList.contains('light-bg')) {
        turn.innerHTML = 'of'
    }
    else {
        turn.innerHTML = 'on'
    }




})


