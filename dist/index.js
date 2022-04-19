var body = document.body;
// ------------------ELEMENTS-----------------
var me = document.getElementsByClassName('me')[0];
var meHeading = document.getElementsByClassName('me__heading')[0];
var work = document.getElementsByClassName('work')[0];
var workHeading = document.getElementsByClassName('work__heading')[0];
var profiles = document.getElementsByClassName('profiles')[0];
var profilesHeading = document.getElementsByClassName('profiles__heading')[0];
var education = document.getElementsByClassName('education')[0];
var educationHeading = document.getElementsByClassName('education__heading')[0];
var educationList = document.getElementsByClassName('education-list')[0];
var other = document.getElementsByClassName('other')[0];
var otherHeading = document.getElementsByClassName('other__heading')[0];
var styleGames = document.getElementById('style-games');
// -----------------BUTTONS-----------------
var layoutButton = document.getElementById('layout');
var darkButton = document.getElementById('dark');
var floridButton = document.getElementById('florid');
var articles = Array.prototype.filter.call(document.getElementsByTagName('article'), function (a) { return !a.classList.contains('contact'); }), svgs = document.getElementsByTagName('svg'), buttons = document.getElementsByTagName('button'), workIcons = work.getElementsByTagName('svg');
var otherButtons = other.getElementsByTagName('button');
//---------------FUNCTIONS-----------------------
var putItIn = function (s) {
    var popUp = document.createElement('modal'), count = s.split(' ').length;
    popUp.classList.add('modal');
    popUp.innerHTML = "<p>" + s + "</p>";
    body.appendChild(popUp);
    setTimeout(function () {
        popUp.classList.add('modal---visible');
        setTimeout(function () {
            popUp.classList.remove('modal---visible');
            setTimeout(function () { return body.removeChild(popUp); }, 800);
        }, 1000 + 100 * count);
    }, 100);
};
//----------------MEDIA QUERIES----------------------
var mobile = window.matchMedia('(max-width: 700px)');
var tablet = window.matchMedia('(min-width: 700px)');
var desktop = window.matchMedia('(min-width: 1200px)');
var handleMobileChange = function (e) {
    if (e.matches) {
        meHeading.addEventListener('click', function () {
            !body.classList.contains('florid') &&
                me.classList.toggle('me---open');
        });
        workHeading.addEventListener('click', function () {
            !body.classList.contains('florid') &&
                work.classList.toggle('work---open');
        });
        profilesHeading.addEventListener('click', function () {
            !body.classList.contains('florid') &&
                profiles.classList.toggle('profiles---open');
        });
        educationHeading.addEventListener('click', function () {
            !body.classList.contains('florid') &&
                education.classList.toggle('education---open');
        });
        otherHeading.addEventListener('click', function () {
            !body.classList.contains('florid') &&
                other.classList.toggle('other---open');
        });
        layoutButton.addEventListener('click', function () {
            body.classList.toggle('layout');
            if (body.classList.contains('layout')) {
                putItIn('Yes. Order.');
            }
            else {
                putItIn('A chaos enthusiast, are we?');
            }
        });
        darkButton.addEventListener('click', function () {
            body.classList.toggle('dark');
            darkButton.innerHTML = body.classList.contains('dark') ? 'LIGHT' : 'DARK';
            if (body.classList.contains('dark')) {
                putItIn('Oooooo, edgy.');
            }
            else {
                putItIn('Sure, back to normal. Is your life as exciting as your choices?');
            }
        });
        floridButton.addEventListener('click', function () {
            body.classList.toggle('florid');
            floridButton.innerHTML = body.classList.contains('florid') ? 'Dull' : 'Florid';
            if (body.classList.contains('florid')) {
                putItIn('So fancy.');
            }
            else {
                putItIn('Really???');
            }
        });
        window.addEventListener('scroll', function () {
            var s = window.scrollY / 300;
            styleGames.style.opacity = s < 1 ? String(s) : '1';
        });
    }
};
var handleTabletChange = function (e) {
    if (e.matches) {
        if (window.matchMedia('(max-width: 1200px)').matches) {
            var educationTable = [
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
            ];
            var table_1 = document.createElement('table');
            var rows = educationTable.map(function (e) { return Object.values(e).reduce(function (a, b) { return a + ('<td>' + b + '</td>'); }, ''); });
            rows.unshift(Object.keys(educationTable[0]).reduce(function (a, b) { return a + ('<th>' + b + '</th>'); }, ''));
            rows.forEach(function (e) { return table_1.innerHTML += ('<tr>' + e + '</tr>'); });
            education.removeChild(educationList);
            education.appendChild(table_1);
        }
        otherButtons[0].addEventListener('click', function () {
            window.open('https://en.wikipedia.org/wiki/Music', '_blank');
        });
        otherButtons[1].addEventListener('click', function () {
            window.open('https://dirthand.bandcamp.com/', '_blank');
        });
        otherButtons[2].addEventListener('click', function () {
            window.open('https://en.wikipedia.org/wiki/Reading', '_blank');
        });
        otherButtons[3].addEventListener('click', function () {
            window.open('https://en.wikipedia.org/wiki/Basketball', '_blank');
        });
        otherButtons[4].addEventListener('click', function () {
            window.open('https://en.wikipedia.org/wiki/Second-language_acquisition', '_blank');
        });
        otherButtons[5].addEventListener('click', function () {
            window.open('https://en.wikipedia.org/wiki/Hiking', '_blank');
        });
        otherButtons[6].addEventListener('click', function () {
            window.open('https://en.wikipedia.org/wiki/Cooking', '_blank');
        });
        otherButtons[7].addEventListener('click', function () {
            window.open('https://en.wikipedia.org/wiki/Writing', '_blank');
        });
    }
};
var handleDesktopChange = function (e) {
    if (e.matches) {
    }
};
mobile.addEventListener('change', handleMobileChange);
handleMobileChange(mobile);
tablet.addEventListener('change', handleTabletChange);
handleTabletChange(tablet);
desktop.addEventListener('change', handleDesktopChange);
handleDesktopChange(desktop);
