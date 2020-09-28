$('document').ready(function () {
  const amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    $('.amenities H4').text(Object.values(amenities).join(', '));
  });
  $.get('http://127.0.0.1:5001/api/v1/status', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
  $.ajax({
    type: 'POST',
    url: 'http://127.0.0.1:5001/api/v1/places_search',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json'
  }).done(function (json) {
    for (const obj in json) {
      $('.places').append('<article><div class="title_box"><h2>' + json[obj].name + '</h2><div class="price_by_night">' + json[obj].price_by_night + '</div></div><div class="information"><div class="max_guest">' + json[obj].max_guest + '</div><div class="number_rooms">' + json[obj].number_rooms + '</div><div class="number_bathrooms">' + json[obj].number_bathrooms + '</div></div><div class="description">' + json[obj].description + '</div></article>');
    }
  });
});
