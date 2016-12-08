console.log('DOM loaded.')
$( function() {
  $("#datepicker").datepicker({
    inline: true,
    showOtherMonths
    dayNameMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    });
});


