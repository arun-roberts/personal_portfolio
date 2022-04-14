const body: HTMLElement = document.body
// ------------------ELEMENTS-----------------
const me: Element = document.getElementsByClassName('me')[0]
const meHeading: Element = document.getElementsByClassName('me__heading')[0]
const work: Element = document.getElementsByClassName('work')[0]
const workHeading: Element = document.getElementsByClassName('work__heading')[0]
const profiles: Element = document.getElementsByClassName('profiles')[0]
const profilesHeading: Element = document.getElementsByClassName('profiles__heading')[0]
const education: Element = document.getElementsByClassName('education')[0]
const educationHeading: Element = document.getElementsByClassName('education__heading')[0]
const other: Element = document.getElementsByClassName('other')[0]
const otherHeading: Element = document.getElementsByClassName('other__heading')[0]
// -----------------BUTTONS-----------------
const spacingButton: Element = document.getElementById('spacing')
const layoutButton: Element = document.getElementById('layout')
const darkButton: Element = document.getElementsByClassName('dark-button')[0]
const floridButton: Element = document.getElementById('flord')
let articles = Array.prototype.filter.call(document.getElementsByTagName('article'), (a: HTMLElement) => !a.classList.contains('contact')),   
    svgs = document.getElementsByTagName('svg'), 
    buttons = document.getElementsByTagName('button'),
    workIcons = work.getElementsByTagName('svg')

meHeading.addEventListener('click', () => {
    me.classList.toggle('me---open')
})
workHeading.addEventListener('click', () => {
    work.classList.toggle('work---open')
})
profilesHeading.addEventListener('click', () => {
    profiles.classList.toggle('profiles---open')
})
educationHeading.addEventListener('click', () => {
    education.classList.toggle('education---open')
})
otherHeading.addEventListener('click', () => {
    other.classList.toggle('other---open')
})
spacingButton.addEventListener('click', () => {
    body.classList.toggle('spacing')
})
layoutButton.addEventListener('click', () => {
    body.classList.toggle('layout')
})
darkButton.addEventListener('click', () => {
    body.classList.toggle('dark')
})

