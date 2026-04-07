const themeLink = document.querySelector('#themeLink')
const btnDark = document.querySelector('#btnDark')
const btnlight = document.querySelector('#btnLight')
const saveLocal = localStorage.getItem('theme')

function colorBtn(theme) {
    if(theme === 'dark') {
        themeLink.href = './style/theme/Dark.css'
        btnDark.classList.toggle('active')
        btnlight.classList.toggle('active')
        localStorage.setItem('theme', 'dark')
    } else {
        themeLink.href = './style/theme/ligth.css'
        btnDark.classList.toggle('active')
        btnlight.classList.toggle('active')
        localStorage.setItem('theme', 'light')
    }
}

btnDark.addEventListener('click', () => colorBtn('dark'))
btnlight.addEventListener('click', () => colorBtn('light'))

if (saveLocal) {
    colorBtn(saveLocal)
} else {
    colorBtn('light')
}

const spanNum = document.querySelector('#randomNum')

const upbtn = document.querySelector('#btnUp')
const downbtn = document.querySelector('#btnDown')

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

upbtn.addEventListener('click', () => {
    const numValue = getRandomNumber(50, 100)
    spanNum.textContent = numValue
})

downbtn.addEventListener('click', () => {
    const numValue = getRandomNumber(1, 50)
    spanNum.textContent = numValue
})