const display = document.querySelector(".display")

// all functional key buttton 
const clickableButton = (input) => {
    display.value += input
}

// Delete one by one display value
const deleteOne = () => {
    display.value = display.value.slice(0, -1)
}

// delete all display value
const allDelete = () => {
    display.value = ""
}

// "%" for displayb value
const percentButton = (input) => {
    display.value += input
    if (display.value.includes("%")) {
        display.value = eval(display.value.replace("%", "/100"))
    }
}

// Caltunlate key "=" handle
const calculate = (input) => {
    try {
        if (display.value === "") {
            display.value = ""
        } else {
            display.value = eval(display.value)
        }
    } catch (error) {
        console.log(error);
    }
}

// Loaded dom content

window.addEventListener("DOMContentLoaded", (e) => {
    display.focus()
})