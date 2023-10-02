let info = document.getElementById("info")
let catalog = document.getElementById("catalog")
let contacts = document.getElementById("contacts")

const checkInfo = () => {
    info.parentNode.classList.toggle("active")
}
    
const checkCatalog = () => {
    catalog.parentNode.classList.toggle("active")
}

const checkContacts = () => {
    contacts.parentNode.classList.toggle("active")
}