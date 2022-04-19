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
const educationList = document.getElementsByClassName('education-list')[0]
const other: Element = document.getElementsByClassName('other')[0]
const otherHeading: Element = document.getElementsByClassName('other__heading')[0]
const styleGames: HTMLElement = document.getElementById('style-games')

// -----------------BUTTONS-----------------
const layoutButton: Element = document.getElementById('layout')
const darkButton: Element = document.getElementById('dark')
const floridButton: Element = document.getElementById('florid')
let articles = Array.prototype.filter.call(document.getElementsByTagName('article'), (a: HTMLElement) => !a.classList.contains('contact')),   
    svgs = document.getElementsByTagName('svg'), 
    buttons = document.getElementsByTagName('button'),
    workIcons = work.getElementsByTagName('svg')
const otherButtons = other.getElementsByTagName('button')

//---------------FUNCTIONS-----------------------
const putItIn = (s: string) => {
    let popUp = document.createElement('modal'),
        count = s.split(' ').length
    popUp.classList.add('modal')
    popUp.innerHTML = `<p>${s}</p>`
    body.appendChild(popUp)
    setTimeout(() => {
        popUp.classList.add('modal---visible')
        setTimeout(() => {
            popUp.classList.remove('modal---visible')
            setTimeout(() => body.removeChild(popUp), 800)
        }, 1000 + 100 * count)
    }, 100)
}

//----------------MEDIA QUERIES----------------------
const mobile: MediaQueryList = window.matchMedia('(max-width: 700px)')
const tablet: MediaQueryList = window.matchMedia('(min-width: 700px)') 
const desktop: MediaQueryList = window.matchMedia('(min-width: 1200px)')

const handleMobileChange = e => {
    if (e.matches) {
        meHeading.addEventListener('click', () => {
            !body.classList.contains('florid') &&
            me.classList.toggle('me---open')
        })
        workHeading.addEventListener('click', () => {
            !body.classList.contains('florid') &&
            work.classList.toggle('work---open')
        })
        profilesHeading.addEventListener('click', () => {
            !body.classList.contains('florid') &&
            profiles.classList.toggle('profiles---open')
        })
        educationHeading.addEventListener('click', () => {
            !body.classList.contains('florid') &&
            education.classList.toggle('education---open')
        })
        otherHeading.addEventListener('click', () => {
            !body.classList.contains('florid') &&
            other.classList.toggle('other---open')
        })
        layoutButton.addEventListener('click', () => {
            body.classList.toggle('layout')
            if (body.classList.contains('layout')) {
                putItIn('Yes. Order.')
            } else {
                putItIn('A chaos enthusiast, are we?')
            }
        })
        darkButton.addEventListener('click', () => {
            body.classList.toggle('dark')
            darkButton.innerHTML = body.classList.contains('dark') ? 'LIGHT' : 'DARK'
            if (body.classList.contains('dark')) {
                putItIn('Oooooo, edgy.')
            } else {
                putItIn('Sure, back to normal. Is your life as exciting as your choices?')
            }
        })
        floridButton.addEventListener('click', () => {
            body.classList.toggle('florid')
            floridButton.innerHTML = body.classList.contains('florid') ? 'Dull' : 'Florid'
            if (body.classList.contains('florid')) {
                putItIn('So fancy.')
            } else {
                putItIn('Really???')
            }
        })
        window.addEventListener('scroll', () => {
            let s = window.scrollY / 300
            styleGames.style.opacity = s < 1 ? String(s) : '1'
        })
    }
}
const handleTabletChange = e => {
    if (e.matches) {
        if (window.matchMedia('(max-width: 1200px)').matches) {
            const educationTable = [
                {
                    year: '2021',
                    title: 'Javascript Algorithms and Data Structures',
                    instructor: 'Quincy Larson',
                    institution: 'freeCodeCamp',
                    score: 'n/a'
                },
                {
                    year: '2020',
                    title: 'The Web Developer Bootcamp',
                    instructor: 'Colt Steele',
                    institution: 'Udemy',
                    score: 'n/a'
                },
                {
                    year: '2008',
                    title: 'Bachelor of Arts in Japanese',
                    instructor: 'Various',
                    institution: 'University of Queensland',
                    score: '6'
                },
                {
                    year: '2003',
                    title: 'High School',
                    instructor: 'Various',
                    institution: 'The School of Total Education',
                    score: '93.4'
                },
            ]
            let table = document.createElement('table')
            const rows = educationTable.map(e => Object.values(e).reduce((a, b) => a + ('<td>' + b + '</td>'), ''))
            rows.unshift(Object.keys(educationTable[0]).reduce((a, b) => a + ('<th>' + b + '</th>'), ''))
            rows.forEach(e => table.innerHTML += ('<tr>' + e + '</tr>'))
            education.removeChild(educationList)
            education.appendChild(table)
        }
        otherButtons[0].addEventListener('click', () => {
            window.open('https://en.wikipedia.org/wiki/Music', '_blank')
        })
        otherButtons[1].addEventListener('click', () => {
            window.open('https://dirthand.bandcamp.com/', '_blank')
        })
        otherButtons[2].addEventListener('click', () => {
            window.open('https://en.wikipedia.org/wiki/Reading', '_blank')
        })
        otherButtons[3].addEventListener('click', () => {
            window.open('https://en.wikipedia.org/wiki/Basketball', '_blank')
        })
        otherButtons[4].addEventListener('click', () => {
            window.open('https://en.wikipedia.org/wiki/Second-language_acquisition', '_blank')
        })
        otherButtons[5].addEventListener('click', () => {
            window.open('https://en.wikipedia.org/wiki/Hiking', '_blank')
        })
        otherButtons[6].addEventListener('click', () => {
            window.open('https://en.wikipedia.org/wiki/Cooking', '_blank')
        })
        otherButtons[7].addEventListener('click', () => {
            window.open('https://en.wikipedia.org/wiki/Writing', '_blank')
        })
    }
}
const handleDesktopChange = e => {
    if (e.matches) {

    }
}

mobile.addEventListener('change', handleMobileChange)
handleMobileChange(mobile)
tablet.addEventListener('change', handleTabletChange)
handleTabletChange(tablet)
desktop.addEventListener('change', handleDesktopChange)
handleDesktopChange(desktop)