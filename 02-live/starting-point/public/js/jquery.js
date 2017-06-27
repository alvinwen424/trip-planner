//const map = require('./map.js')

$(document).ready(function() {

  const redButton = "<button class='btn btn-xs btn-danger remove btn-circle'>x</button>";

  $('#hotel-add').on('click', function(){
    const name = $('#hotel-choices option:selected').val();
    $('#hotel-list').append($(`<div class='itinerary-item'>${name} ${redButton}</div>`))

    let location = [];
    for (var i = 0; i < hotels.length; i++) {
      if (hotels[i].name === name) {
        location = hotels[i].place.location;
      }
    }
    mapfunc[0].drawMarker('hotel', location);
  })


  $('#restaurant-add').on('click', function(){
    const name = $('#restaurant-choices option:selected').val();
    $('#restaurant-list').append($(`<div class='itinerary-item'>${name} ${redButton}</div>`))

    let location = [];
    for (var i = 0; i < restaurants.length; i++) {
      if (restaurants[i].name === name) {
        location = restaurants[i].place.location;
      }
    }
    mapfunc[0].drawMarker('restaurant', location);
  })


  $('#activity-add').on('click', function(event){
    const name = $('#activity-choices option:selected').val();
    $('#activity-list').append($(`<div class='itinerary-item'>${name} ${redButton}</div>`))


    let location = [];
    for (var i = 0; i < activities.length; i++) {
      if (activities[i].name === name) {
        location = activities[i].place.location;
      }
    }
    mapfunc[0].drawMarker('activity', location);
  });


$('#hotel-list').on('click', function(event) {
  $(event.target).parent().remove();
})

$('#restaurant-list').on('click', function(event) {
  $(event.target).parent().remove();
})

$('#activity-list').on('click', function(event) {
  $(event.target).parent().remove();
  //console.dir($(event.target.previousSibling))
})


$('.day-buttons').not(':last-child').on('click', function(event) {
  const selectedDay = $(event.target).text();
  console.log(selectedDay)

  $('#day-title>span').text(`Day ${selectedDay}`);

  $(event.target).siblings().removeClass('current-day')
  $(event.target).addClass('current-day')
})

})
