let sections=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a')
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top =window.scrollY;
        let offset=sec.offsetTop -200;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
        
        if (top>=offset && top<offset + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*= ' +  id +']').classList.add('active')
            });
        };
    });
}

const toggleButton= document.querySelector(".toggle-button")

toggleButton.onclick= function(){
    const navbarLinks= document.querySelector(".nav-links")
    navbarLinks.classList.toggle("active");
    
}