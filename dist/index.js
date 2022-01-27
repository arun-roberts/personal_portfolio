var mainTitle = document.getElementsByTagName('h1')[0];
var scrollDiv = document.getElementById('scrollDiv');
for (var i = 0; i < 30; i++) {
    var addItUp = scrollDiv.innerHTML + "<p class=\"iCantSeeYou\">0</p><br>";
    scrollDiv.innerHTML = addItUp;
}
var testSubject = document.getElementById('testSubject');
scrollDiv.addEventListener('scroll', function () { return console.log(scrollDiv.scrollTop.toString()); });
