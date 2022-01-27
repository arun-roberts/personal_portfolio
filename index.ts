let mainTitle: HTMLHeadingElement = document.getElementsByTagName('h1')[0]
const scrollDiv: HTMLElement = document.getElementById('scrollDiv')
for(let i = 0; i < 30; i++){
    let addItUp = scrollDiv.innerHTML + `<p class="iCantSeeYou">0</p><br>`
    scrollDiv.innerHTML = addItUp
}
const testSubject: HTMLElement = document.getElementById('testSubject')
scrollDiv.addEventListener('scroll', () => console.log(scrollDiv.scrollTop.toString()))