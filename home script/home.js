const menu = document.querySelector(".fas");
const navbar = document.querySelector(".nav-list");

const nav1 = document.getElementById("nav1")
const nav2 = document.getElementById("nav2")
const nav3 = document.getElementById("nav3")
const nav4 = document.getElementById("nav4")
const nav5 = document.getElementById("nav5")
const nav6 = document.getElementById("nav6")

navbar.style.maxHeight = "0px"
menu.addEventListener("click", () => {
    if (navbar.style.maxHeight == "0px") {
        navbar.style.maxHeight = "300px"
        nav1.style.display = "flex"
        nav2.style.display = "flex"
        nav3.style.display = "flex"
        nav4.style.display = "flex"
        nav5.style.display = "flex"
        nav6.style.display = "flex"
        menu.classList.toggle("fa-x")
    } else {
        navbar.style.maxHeight = "0px"
        nav1.style.display = "none"
        nav2.style.display = "none"
        nav3.style.display = "none"
        nav4.style.display = "none"
        nav5.style.display = "none"
        nav6.style.display = "none"
        menu.classList.remove("fa-x")
    }
});

const Eat = document.querySelector(".eat-like");

Eat.style.color = "gray"
Eat.addEventListener("click", () => {
    if (Eat.style.color == "gray") {
        Eat.style.color = "red"
    } else {
        Eat.style.color = "gray"
    }
})