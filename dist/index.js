var mainTitle = document.getElementsByTagName('h1')[0];
var scrollDiv = document.getElementById('scrollDiv');
for (var i = 0; i < 30; i++) {
    var addItUp = scrollDiv.innerHTML + "<p class=\"iCantSeeYou\">0</p><br>";
    scrollDiv.innerHTML = addItUp;
}
var testSubject = document.getElementById('testSubject');
var scrollNum;
scrollDiv.addEventListener('scroll', function () {
    var scroller = scrollDiv.scrollTop;
    scrollNum = scroller;
    console.log(scrollNum > 100);
    scrollNum > 100 ? mainTitle.style.color = 'blue' : mainTitle.style.color = 'black';
    scrollNum > 300 ? mainTitle.style.backgroundColor = 'green' : mainTitle.style.backgroundColor = 'white';
});
