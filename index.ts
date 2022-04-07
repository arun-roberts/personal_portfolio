let mainTitle: HTMLHeadingElement = document.getElementsByTagName('h1')[0]
const scrollDiv: HTMLElement = document.getElementById('scrollDiv')
for(let i = 0; i < 30; i++){
    let addItUp = scrollDiv.innerHTML + `<p class="iCantSeeYou">0</p><br>`
    scrollDiv.innerHTML = addItUp
}
const testSubject: HTMLElement = document.getElementById('testSubject')
let scrollNum: number
scrollDiv.addEventListener('scroll', () => {
    let scroller = scrollDiv.scrollTop
    scrollNum = scroller
    console.log(scrollNum > 100)
    scrollNum > 100 ? mainTitle.style.color = 'blue' : mainTitle.style.color = 'black'
    scrollNum > 300 ? mainTitle.style.backgroundColor = 'green' : mainTitle.style.backgroundColor = 'white'
})
