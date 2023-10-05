const backTopBtn = document.getElementById('back-top-btn')

addEventListener("scroll", (e)=>{
    backTopBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? 'block' : 'none' ;
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
console.log(seeMore);
console.log(seeLessArr);
seeMoreArr.forEach(element => {
    element.addEventListener('click', e => {
        const targetVal = element.dataset.bsTarget
        console.log('seeMore target:' , targetVal);
        firstScroll[targetVal] = (document.documentElement.scrollTop || document.body.scrollTop)
        console.log('first scroll value:', firstScroll);
    });
});
seeLessArr.forEach(element=> {
    element.addEventListener('click', e=> {
    const targetVal = element.dataset.bsTarget
    console.log('seeMLess target:' , targetVal);
    document.documentElement.scrollTop = firstScroll[targetVal]
    // document.body.scrollTop = firstScroll.targetVal-100
    })
})

