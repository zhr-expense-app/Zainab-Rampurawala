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

let next=el.nextElementSibling

next.style.display=
next.style.display==="block"
? "none"
: "block"

}

/* Search */

document.addEventListener("input",function(e){

if(e.target.id==="toolSearch"){

let filter=e.target.value.toLowerCase()

document.querySelectorAll(".submenu a").forEach(link=>{

link.style.display=
link.textContent.toLowerCase().includes(filter)
? "flex"
: "none"

})

}

})

/* Active page highlight */

function highlightActivePage(){

let path=window.location.pathname.split("/").pop()

document.querySelectorAll(".sidebar a").forEach(link=>{

if(link.getAttribute("href")===path){

link.classList.add("active")

}

})

}