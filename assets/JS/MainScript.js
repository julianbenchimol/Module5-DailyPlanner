//

//Current Time Variables
var timeViewElement;
var now;

//Gets the time and updates the HTML element in real time
var UpdateTime = function(){
    now = moment();
    timeViewElement.text(now.format('dddd, MMMM do YYYY, hh:mm:ss a'));
}
$(document).ready(function(){
    timeViewElement = $('#time-view')
    UpdateTime();
    setInterval(UpdateTime, 1000);
});