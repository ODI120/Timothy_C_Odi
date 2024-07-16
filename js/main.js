// ================ Nav bar react ============================

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 1)
})

// / ====================scroll show/hiden======

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// ============nav collaps=====================

const toggleBtn = document.querySelector('.toggle_btn')
const toggleIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleIcon.classList = isOpen
    ? 'bi bi-x'
    : 'bi bi-list'
}

// ==================================


    const heroimage = [
        {  image: 'mockup img/img-2.png'},
        {  image: 'mockup img/img-3.png'},
        {  image: 'mockup img/img-4.png'},
        {  image: 'mockup img/img-5.png'},
        {  image: 'mockup img/img-6.png'},
        {  image: 'mockup img/img-7.png'},
        {  image: 'mockup img/img-8.png'},
        {  image: 'mockup img/img-9.png'},
        {  image: 'mockup img/img-1.png'},
    ];

    let currentIndex = 0;
    const imageElement = document.querySelector('.hero-image');

    setInterval(function() {
        imageElement.src = heroimage[currentIndex].image;

        currentIndex = (currentIndex + 1) % heroimage.length;
    }, 5000);