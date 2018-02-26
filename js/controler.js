$('#myNavbar').on('show.bs.collapse', function () {
  $('.casa-titulo').css('transform', 'translate(-50%, 10%)');
});
$('#myNavbar').on('hide.bs.collapse', function () {
  $('.casa-titulo').css('transform', 'translate(-50%, -50%)');
});
