let navToggler = document.querySelector(".navbarToggler");

navToggler.addEventListener("click", ()=>{
    navToggler.classList.toggle("active");
})


window.addEventListener('load', function () {
    document.querySelector('.pre-loader').className += ' hidden';
});
