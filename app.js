const Open = document.querySelector(".open")
const Sidebar = document.querySelector(".sidebar")


let OpenClose = false
function MyFunc() {
    if (OpenClose === false) {
        Sidebar.style.transform = "translateX(0)"
        OpenClose = true
    }
    else {
        OpenClose = false
        Sidebar.style.transform = "translateX(0px)"
    }
    console.log(OpenClose)
}

let closenow = false
function Close() {
    if (closenow === false) {
        Sidebar.style.transform = "translateX(-400px)"
        closenow = true
    }
    else {
        closenow = false
        Sidebar.style.transform = "translateX(-400px)"
    }
    console.log(closenow)
}