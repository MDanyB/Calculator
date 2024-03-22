let inputValue = document.getElementById("InputValue")

function Refresh() {
    inputValue.value = ""
}

function Divide() {
    if (inputValue.value != "") {
        inputValue.value += "/"
    }
    
}

function Multiple() {
    if (inputValue.value != "") {
    inputValue.value += "*"
    }
}

function Minus() {
    if (inputValue.value != "") {
    inputValue.value += "-"
    }
}

function Plus() {
    if (inputValue.value != "") {
    inputValue.value += "+"
    }
}

function Equals() {
    if (inputValue.value != "") {
        inputValue.value = eval(inputValue.value)
    }
    
}

function AddValue(Number) {
    inputValue.value += Number
}