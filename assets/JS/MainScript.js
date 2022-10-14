//Time Slot Note Elements
var hourNineElement = $('#hour-9');
var hourTenElement = $('#hour-10');
var hourElevenElement = $('#hour-11');
var hourTwelveElement = $('#hour-12');
var hourOneElement = $('#hour-1');
var hourTwoElement = $('#hour-2');
var hourThreeElement = $('#hour-3');
var hourFourElement = $('#hour-4');
var hourFiveElement = $('#hour-5')

//Time Slot Note Values
var hourNineNotes = localStorage.getItem('hour-9');
var hourTenNotes = localStorage.getItem('hour-10');
var hourElevenNotes = localStorage.getItem('hour-11');
var hourTwelveNotes = localStorage.getItem('hour-12');
var hourOneNotes = localStorage.getItem('hour-1');
var hourTwoNotes = localStorage.getItem('hour-2');
var hourThreeNotes = localStorage.getItem('hour-3');
var hourFourNotes = localStorage.getItem('hour-4');
var hourFiveNotes = localStorage.getItem('hour-5');

//Button Elements
var saveButton = $('#save-button');
var clearButton = $('#clear-button');

//Current Time Variables
var timeViewElement;
var now;

//Event Listeners for Buttons
saveButton.on('click', SaveNotes);
clearButton.on('click', ClearNotes);

//Gets the time and updates the HTML element in real time
var UpdateTime = function(){
    now = moment();
    timeViewElement.text(now.format('dddd, MMMM do YYYY, hh:mm:ss a'));
}
$(document).ready(function(){
    UpdateNoteElements();
    timeViewElement = $('#time-view')
    UpdateTime();
    setInterval(UpdateTime, 1000);
});

function SaveNotes(){
    hourNineNotes = $('#hour-9').val();
    hourTenNotes = $('#hour-10').val();
    hourElevenNotes = $('#hour-11').val();
    hourTwelveNotes = $('#hour-12').val();
    hourOneNotes = $('#hour-1').val();
    hourTwoNotes = $('#hour-2').val();
    hourThreeNotes = $('#hour-3').val();
    hourFourNotes = $('#hour-4').val();
    hourFiveNotes = $('#hour-5').val();

    localStorage.setItem('hour-9', hourNineNotes);
    localStorage.setItem('hour-10', hourTenNotes);
    localStorage.setItem('hour-11', hourElevenNotes);
    localStorage.setItem('hour-12', hourTwelveNotes);
    localStorage.setItem('hour-1', hourOneNotes);
    localStorage.setItem('hour-2', hourTwoNotes);
    localStorage.setItem('hour-3', hourThreeNotes);
    localStorage.setItem('hour-4', hourFourNotes);
    localStorage.setItem('hour-5', hourFiveNotes);

    UpdateNoteElements();
}

function UpdateNoteElements(){
    hourNineNotes = localStorage.getItem('hour-9');
    hourTenNotes = localStorage.getItem('hour-10');
    hourElevenNotes = localStorage.getItem('hour-11');
    hourTwelveNotes = localStorage.getItem('hour-12');
    hourOneNotes = localStorage.getItem('hour-1');
    hourTwoNotes = localStorage.getItem('hour-2');
    hourThreeNotes = localStorage.getItem('hour-3');
    hourFourNotes = localStorage.getItem('hour-4');
    hourFiveNotes = localStorage.getItem('hour-5');

    hourNineElement.text(hourNineNotes);
    hourTenElement.text(hourTenNotes);
    hourElevenElement.text(hourElevenNotes);
    hourTwelveElement.text(hourTwelveNotes);
    hourOneElement.text(hourOneNotes);
    hourTwoElement.text(hourTwoNotes);
    hourThreeElement.text(hourThreeNotes);
    hourFourElement.text(hourFourNotes);
    hourFiveElement.text(hourFiveNotes);
}
function ClearNotes(){
    if(confirm("Do you want to delete all notes?")){
        alert("notes deleted");
    }
    else{
        alert("notes not deleted");
    }
}