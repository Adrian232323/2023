const nav = document.querySelector('.nav-mobile')
const navBTN = document.querySelector('.burger-btn')
const allIinks = document.querySelectorAll('.nav-item')
const navBtnBars = document.querySelector('.burger-btn-bars')
const footerYear = document.querySelector('.footer-year')
const sliderBox = document.querySelector('.slider-box')
const carouselImages = document.querySelectorAll('.slider-img')
const carouselWidth = 300
const carouselSpeed = 1500
let index = 0





const handCarousel = () => {
    index++
    changeImages ()
}
let startCarousel = setInterval( handCarousel, carouselSpeed)

const changeImages = () => {
    if(index > carouselImages.length -1){
        index = 0
    }
    else if 
        (index < 0){
            index = carouselImages.length -1
        }
    sliderBox.style.transform = `translateX(${- index * carouselWidth}px)`

}




const handleNAv = () => {
    nav.classList.toggle('nav-active')
    allIinks.forEach(item => {
        item.addEventListener('click', () =>
        nav.classList.remove('nav-active'))
    })
    
    handleNavItemsAnimation();
   
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allIinks.forEach(item => {
        item.classList.toggle('nav-items-animation')

        item.style.animationDelay = '.' + delayTime + 's'; 
        delayTime++;
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


handleCurrentYear();
navBTN.addEventListener('click', handleNAv)
