/* Load header */

fetch("header.html")
.then(r=>r.text())
.then(data=>{
document.getElementById("header").innerHTML=data
lucide.createIcons()
})

/* Load sidebar */

fetch("sidebar.html")
.then(r=>r.text())
.then(data=>{
document.getElementById("sidebar-container").innerHTML=data
lucide.createIcons()
highlightActivePage()
})

/* Sidebar */

function openSidebar(){
document.getElementById("sidebar").style.width="270px"
document.getElementById("overlay").style.display="block"
}

function closeSidebar(){
document.getElementById("sidebar").style.width="0"
document.getElementById("overlay").style.display="none"
}

/* Collapsible categories */

function toggleCategory(el){

let allCategories = document.querySelectorAll(".menu-category")

allCategories.forEach(cat=>{
if(cat !== el){
cat.classList.remove("active")
}
})

/* Toggle current */

el.classList.toggle("active")

}

/* Search */

document.addEventListener("input", function(e){

if(e.target.id === "toolSearch"){

let filter = e.target.value.toLowerCase()

let categories = document.querySelectorAll(".menu-category")

categories.forEach(category=>{

let submenu = category.nextElementSibling
let links = submenu.querySelectorAll("a")

let matchFound = false

links.forEach(link=>{

let text = link.textContent.toLowerCase()

if(text.includes(filter)){
link.style.display = "flex"
matchFound = true
}else{
link.style.display = "none"
}

})

/* SHOW / HIDE CATEGORY */

if(matchFound){
category.style.display = "flex"
submenu.style.display = "block"
category.classList.add("active")
}else{
category.style.display = "none"
submenu.style.display = "none"
category.classList.remove("active")
}

})

/* RESET IF EMPTY SEARCH */

if(filter === ""){
categories.forEach(category=>{
category.style.display = "flex"
category.classList.remove("active")
category.nextElementSibling.style.display = "none"
})
}

}
})

/* Active page highlight */

function highlightActivePage(){

let path = window.location.pathname.split("/").pop()

document.querySelectorAll(".sidebar a").forEach(link=>{

if(link.getAttribute("href") === path){

link.classList.add("active")

let submenu = link.closest(".submenu")
if(submenu){
submenu.style.display = "block"
submenu.previousElementSibling.classList.add("active")
}

}

})

}

/* TOUCH SWIPE SIDEBAR MOBILE + TOUCH LAPTOP */

let touchStartX = 0
let touchEndX = 0

document.addEventListener("touchstart", function(e){
touchStartX = e.changedTouches[0].screenX
})

document.addEventListener("touchend", function(e){
touchEndX = e.changedTouches[0].screenX
handleSwipe()
})

function handleSwipe(){

let swipeDistance = touchEndX - touchStartX

/* OPEN SIDEBAR (swipe right) */
if(touchStartX < 50 && swipeDistance > 80){
openSidebar()
}

/* CLOSE SIDEBAR (swipe left) */
if(swipeDistance < -80){
closeSidebar()
}

}

