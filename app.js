const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const modalContainer = document.querySelector(".modal-container")

// Solution 1

openBtn.addEventListener("click", ()=>{
    modalContainer.classList.add("show")
})

closeBtn.addEventListener("click",()=>{
    modalContainer.classList.remove("show")
})

//Solution 2

// openBtn.addEventListener("click", () => {
//     modalContainer.style.opacity = "1"
//     modalContainer.style.pointerEvents = "auto"
// })

// closeBtn.addEventListener("click", () => {
//     modalContainer.style.opacity = "0"
//     modalContainer.style.pointerEvents = "none"
// })