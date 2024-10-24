const password = document.getElementById('senha')
const background = document.getElementById('background')

password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length 
    const blurValue = 16 - length * 2
    background.style.filter = `blur(${blurValue}px)`
})

function setViewportHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}

window.addEventListener('resize', setViewportHeight);
setViewportHeight();

