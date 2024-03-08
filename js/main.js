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
