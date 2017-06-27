//const map = require('./map.js')

$(document).ready(function() {
  $('#hotel-add').on('click', function(){
      $('#hotel-list').append($('<li>').text($('#hotel-choices option:selected').val()));
      const name = $('#hotel-choices option:selected').val();
      //console.log('coords as a string', coords);
      //console.dir(hotels);
      //map.drawMarker('hotel', coords);
      let location = [];
      for (var i = 0; i < hotels.length; i++) {
        if (hotels[i].name === name) {
          console.log(hotels[i]);
          location = hotels[i].place.location;
        }
      }
      console.log(location);
  })

  $('#restaurant-add').on('click', function(){
    $('#restaurant-list').append($('<li>').text($('#restaurant-choices option:selected').val()));
  })

  $('#activity-add').on('click', function(){
    $('#activity-list').append($('<li>').text($('#activity-choices option:selected').val()));
  })






})
