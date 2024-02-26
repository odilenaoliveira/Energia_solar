const creatMenu = () =>{
    let menu = document.querySelector('header');
    menu.innerHTML=`
    
    <a href="/index.html" class="logo">
    <img src="/public/images/icones/ES_logo_remove.png" alt="">
    </a>
    <div class="menu-toggle"></div>
    <ul class="navbar">
        <li><a href="">Home</a></li>
        <li><a href="">sobre</a></li>
        <li><a href="">serviços</a></li>
        <li><a href="">clientes</a></li>
    </ul>`;
};
creatMenu();


// menu scroll fixed
window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
// menu responsivo
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.onclick = function(){
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
}