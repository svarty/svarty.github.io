const nav = document.querySelector('.flex-nav');
const topOfNav = nav.offsetTop;



function fixNav() {
//    console.log(topOfNav, window.scrollY);
    
    if (window.scrollY > 555) {
        document.body.classList.add('fixed-nav');
        
    } else {
        document.body.classList.remove('fixed-nav');

    }
}

window.addEventListener('scroll', fixNav);

document.querySelector()