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
var other = document.getElementsByClassName('other')[0];
var otherHeading = document.getElementsByClassName('other__heading')[0];
var styleGames = document.getElementById('style-games');
// -----------------BUTTONS-----------------
var layoutButton = document.getElementById('layout');
var darkButton = document.getElementById('dark');
var floridButton = document.getElementById('florid');
var articles = Array.prototype.filter.call(document.getElementsByTagName('article'), function (a) { return !a.classList.contains('contact'); }), svgs = document.getElementsByTagName('svg'), buttons = document.getElementsByTagName('button'), workIcons = work.getElementsByTagName('svg');
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
