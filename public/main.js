const backTopBtn = document.getElementById('back-top-btn')
let lastScrollTop = 0;
const navbar = document.querySelector('nav.navbar')
console.log('navbar:', navbar);
addEventListener("scroll", (e)=>{
    currentScrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
    if (currentScrollTop < lastScrollTop) {
        console.log('scrolling up');
        backTopBtn.style.display = ((currentScrollTop > 300) ) ? 'block' : 'none'
    } else if (currentScrollTop > lastScrollTop) {
        console.log('scrolling down');
        backTopBtn.style.display = 'none'
    }
    lastScrollTop = (currentScrollTop <= 0) ? 0 : currentScrollTop
})

//<-- Second method -->

// backTopBtn.addEventListener("click", ()=>{
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// })
let firstScroll = {}
const seeMore = document.getElementsByClassName('seeMore-link')
const seeLess = document.getElementsByClassName('seeLess-link') 
const seeMoreArr = Array.from(seeMore)
const seeLessArr = Array.from(seeLess)
seeMoreArr.forEach(element => {
    element.addEventListener('click', e => {
        const targetVal = element.dataset.bsTarget
        firstScroll[targetVal] = (document.documentElement.scrollTop || document.body.scrollTop)
    });
});
seeLessArr.forEach(element=> {
    element.addEventListener('click', e=> {
    const targetVal = element.dataset.bsTarget
    document.documentElement.scrollTop = firstScroll[targetVal]
    })
})

// breed characteristics collapse 
const charCollapseBtns = Array.from(document.getElementsByClassName("char-collapse"))
const charCollapseParagraphs = Array.from(document.getElementsByClassName("char-collapse-target"))

charCollapseBtns.forEach(element=>{
    const identifier = element.dataset.charDescid;
    element.addEventListener('click', (e)=>{
        const description = document.getElementById(identifier);
        description.style.display = (description.style.display=='none')? 'block' : 'none';
            element.classList.toggle('bi-plus')
            element.classList.toggle('bi-dash')
    })
})
charCollapseParagraphs.forEach(element=>{

})

// toggle nav-tab visibility
const tabAnchors = document.querySelectorAll('.nav-tabs > .nav-item > a')
let lastActiveTab = 'undefined'
tabAnchors.forEach((item) => {
   if(lastActiveTab == 'undefined'){
   (Array.from(item.classList).includes('active')) && (lastActiveTab = item)} 
   item.addEventListener('click', (e)=>{
    e.preventDefault()
    document.getElementById(e.target.dataset.tabRef).style.display = 'block'
    document.getElementById(lastActiveTab.dataset.tabRef).style.display = 'none'
    lastActiveTab.classList.toggle('active')
    e.target.classList.toggle('active')
    lastActiveTab = e.target
   }) 
})
