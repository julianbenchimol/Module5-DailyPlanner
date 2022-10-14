//Time Slot Notes
var hourNineNotes = $('#hour-9');
var hourTenNotes = $('#hour-10');
var hourElevenNotes = $('#hour-11');
var hourTwelveNotes = $('#hour-12');
var hourOneNotes = $('#hour-1');
var hourTwoNotes = $('#hour-2');
var hourThreeNotes = $('#hour-3');
var hourFourNotes = $('#hour-4');
var hourFiveNotes = $('#hour-5')

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
    timeViewElement = $('#time-view')
    UpdateTime();
    setInterval(UpdateTime, 1000);
});

function SaveNotes(){
    alert("notes saved");
    //UpdatePageElements();
}

function ClearNotes(){
    if(confirm("Do you want to delete all notes?")){
        alert("notes deleted");
    }
    else{
        alert("notes not deleted");
    }
}