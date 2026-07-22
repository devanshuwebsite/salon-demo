

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
link.addEventListener("click",function(e){
e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){
target.scrollIntoView({
behavior:"smooth"
});
}

});
});

// Sticky Navbar
const navbar=document.getElementById("navbar");

window.addEventListener("scroll",()=>{

navbar.style.background=
window.scrollY>60
?
"#111"
:
"rgba(0,0,0,.35)";

});



// Gallery Lightbox

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.cssText=`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.9);
display:flex;
justify-content:center;
align-items:center;
z-index:9999;
cursor:pointer;
`;

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="20px";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.onclick=()=>overlay.remove();

});

});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Page Loader

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

}, 600);

}, 1200);

});

// Active Navbar

const sections = document.querySelectorAll("header,section");
const navItems = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if (window.scrollY >= sectionTop) {
current = section.getAttribute("id");
}

});

navItems.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {
link.classList.add("active");
}

});

});
// Scroll Progress Bar

window.addEventListener("scroll", () => {

const scrollTop = document.documentElement.scrollTop;
const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;

document.getElementById("progress-bar").style.width = progress + "%";

});

// Cursor Glow

const glow = document.querySelector(".cursor-glow");

if(window.innerWidth > 768){

glow.style.display="block";

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});

}