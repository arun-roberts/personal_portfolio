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
// -----------------BUTTONS-----------------
var spacingButton = document.getElementById('spacing');
var layoutButton = document.getElementById('layout');
var darkButton = document.getElementsByClassName('dark-button')[0];
var floridButton = document.getElementById('flord');
var articles = Array.prototype.filter.call(document.getElementsByTagName('article'), function (a) { return !a.classList.contains('contact'); }), svgs = document.getElementsByTagName('svg'), buttons = document.getElementsByTagName('button'), workIcons = work.getElementsByTagName('svg');
meHeading.addEventListener('click', function () {
    me.classList.toggle('me---open');
});
workHeading.addEventListener('click', function () {
    work.classList.toggle('work---open');
});
profilesHeading.addEventListener('click', function () {
    profiles.classList.toggle('profiles---open');
});
educationHeading.addEventListener('click', function () {
    education.classList.toggle('education---open');
});
otherHeading.addEventListener('click', function () {
    other.classList.toggle('other---open');
});
spacingButton.addEventListener('click', function () {
    body.classList.toggle('spacing');
});
layoutButton.addEventListener('click', function () {
    body.classList.toggle('layout');
});
darkButton.addEventListener('click', function () {
    body.classList.toggle('dark');
});
