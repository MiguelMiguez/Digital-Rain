document.querySelector('.MenuMobile').addEventListener('click', function(){
    document.querySelector('.MenuHamburguesa').classList.toggle('show')
    document.querySelector('.MenuMobile').classList.toggle('moveLeft')
} )

document.querySelector('.cruz').addEventListener('click', function(){
    document.querySelector('.MenuHamburguesa').classList.toggle('show')
    document.querySelector('.MenuMobile').classList.toggle('moveLeft')
})


document.addEventListener("DOMContentLoaded", function () {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        const elements = document.querySelectorAll('.TittleLeftWhite, .TittleRightWhite, .TittleLeft, .TittleRight ,.InfoServiceLeft, .InfoServiceRight, .ContainerCardServices,.TextInfoService,.ImgService');

        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add("appear");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});


window.addEventListener('scroll', function() {
    let navbar = document.getElementById('changeColor');
    let whatsappButton = document.querySelector('.WhatsappButton');
    let footer = document.querySelector('.FooterContainer');
    let footerTopPosition = footer.getBoundingClientRect().top;

    if (footerTopPosition > window.innerHeight) {
        whatsappButton.style.bottom = '20px'; 
    } else {
        whatsappButton.style.bottom = (window.innerHeight - footerTopPosition + 20) + 'px'; 
    }
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('notscrolled')
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('notscrolled')
    }

});


document.addEventListener("DOMContentLoaded", function() {
    
    let links = document.querySelectorAll(".MenuDesktop a");

   
    links.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            let targetId = this.getAttribute("href").substring(1);

            let targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    
    let scrollButton = document.getElementById("scrollToServices");

    
    scrollButton.addEventListener("click", function() {
    
        let targetElement = document.getElementById("servicios");

        targetElement.scrollIntoView({
            behavior: "smooth"
        });
    });
});


