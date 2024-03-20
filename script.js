const iconHamburger = document.querySelector(".hamburger"),
    navBar = document.querySelector("nav"),
    searchZone = document.querySelector(".search"),
    visible = document.querySelector(".visible"),
    elementMasquer = document.querySelector(".masquer"),
    loupe = document.querySelector(".loupe"),
    chevron = document.querySelector(".chevron")

iconHamburger.addEventListener("click", () => {
    navBar.classList.toggle("navBar")
})

loupe.addEventListener("click", () => {
    searchZone.classList.toggle("searchZone")
})
visible.addEventListener("click", () => {
    chevron.classList.toggle("rotate")
    showHide(elementMasquer)
})

function showHide(element) {
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

// if (confirm("quitter ?")) {
//     location.href = "/core/pages/Admin/index.php"
// }

// console.log(masquer)