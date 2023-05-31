// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var hr1El = $('#hour-1');
var hr2El = $('#hour-2');
var hr3El = $('#hour-3');
var hr4El = $('#hour-4');
var hr5El = $('#hour-5');
var hr6El = $('#hour-6');
var hr7El = $('#hour-7');
var hr8El = $('#hour-8');
var hr9El = $('#hour-9');
var hr10El = $('#hour-10');
var hr11El = $('#hour-11');
var hr12El = $('#hour-12');
var hr13El = $('#hour-13');
var hr14El = $('#hour-14');
var hr15El = $('#hour-15');
var hr16El = $('#hour-16');
var hr17El = $('#hour-17');
var hr18El = $('#hour-18');
var hr19El = $('#hour-19');
var hr20El = $('#hour-20');
var hr21El = $('#hour-21');
var hr22El = $('#hour-22');
var hr23El = $('#hour-23');
var hr24El = $('#hour-24');


$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    hr1El.children('button').on('click', function(event) {
      event.preventDefault();

      var text = $('#hour-1').children('textarea').text();
      localStorage.setItem('hr1Item', text);
      //local storage is not registering the text input rn...
    })

    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    for (i = 0; i < 24; i++) {
      var currentHour = dayjs().hour();
      var hourDiv = $('#hour-' + String(i));
      
      if (i < currentHour) {
        hourDiv.removeClass('past present future').addClass('past');
      }else if (i == currentHour) {
        hourDiv.removeClass('past present future').addClass('present');
      }else {
        hourDiv.removeClass('past present future').addClass('future');
      }
    }

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    
  
    //
    // TODO: Add code to display the current date in the header of the page.
    setInterval(function() {
      var currentTime = dayjs(); 
      $('#currentDay').text(currentTime.format('dddd, MMM DD, YYYY hh:mm a'));
    }, 1000)
  });
  