const audio = new Audio("./assets/click4.mp3")
const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        audio.play();
        const btnValue = btn.textContent
        if (btnValue === "AC") {
            display.textContent = "";
            return
        }
        if (btnValue === "C") {
            display.textContent = display.textContent.toString().slice(0,-1);
            return
        }
        if (btnValue === '=') {
            display.textContent = eval(display.textContent)
            return
        }
        display.textContent += btnValue;
    })
})



