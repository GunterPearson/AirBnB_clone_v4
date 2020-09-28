$('document').ready(function () {
  $.get('http://127.0.0.1:5001/api/v1/status', function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
