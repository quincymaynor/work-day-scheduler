$(function () {

  $('.saveBtn').on('click', function() {

    var schdeuleText = $(this).siblings('.description').val();
    var timeBlock = $(this).parent().attr('id')

    localStorage.setItem(timeBlock, schdeuleText);
  })

  for (i = 6; i < 23; i++) {
    var currentHour = dayjs().hour();
    var colorKey = '';

    if (i < currentHour) {
      colorKey = 'past'
    }else if (i == currentHour) {
      colorKey = 'present'
    }else {
      colorKey = 'future'
    }

    $(`#hour-${i}`).addClass(colorKey)
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }

  setInterval(function() {
    for (i = 6; i < 23; i++) {
      var currentHour = dayjs().hour();
      var colorKey = '';
  
      if (i < currentHour) {
        colorKey = 'past'
      }else if (i == currentHour) {
        colorKey = 'present'
      }else {
        colorKey = 'future'
      }

      $(`#hour-${i}`).addClass(colorKey)
    }
  }, 10000)
  
  setInterval(function() {
    var currentTime = dayjs(); 
    $('#currentDay').text(currentTime.format('dddd, MMM DD, YYYY hh:mm a'));
  }, 1000)
});