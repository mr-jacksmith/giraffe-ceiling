const body = document.querySelector("body")
const burger = document.getElementById("burger")

const activeBurger = () => {
    burger.classList.toggle("active")
    burger.parentNode.classList.toggle("active")
    body.classList.toggle("hidden")
}

const liList = document.querySelectorAll(".li-p")
console.log(liList)

const activeLi = (i) => {
    for (let j = 0; j < liList.length; j++) {
        const el = liList[j];
        if (j == i) {
            const el = liList[i]
            el.classList.toggle("active")
        } else {
            el.classList.remove("active")
        }
    }

    const el = liList[i]
    if (el.classList.contains("active")) {
        el.parentNode.style.justifyContent = "space-between"
        el.parentNode.style.rowGap = "0"
    } else {
        el.parentNode.style.justifyContent = "flex-start"
        el.parentNode.style.rowGap = "40px"
    }    
}