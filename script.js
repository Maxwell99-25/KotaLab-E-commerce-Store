const orderBtn=document.getElementById("orderBtn");
const hamburger=document.getElementById("hamburger");
const navBar=document.querySelector('.navbar');
hamburger.addEventListener('click',()=>{
navBar.classList.toggle('show');
});
orderBtn.addEventListener('click',()=>{
window.location="menu.html";
});

