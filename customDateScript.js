var dialogElem = $("#dialog");
$.datepicker.setDefaults( $.datepicker.regional[ "uk" ] );
dialogElem.dialog({ autoOpen: false, title: 'Обрано дату'});
var holidays= ["01-01","05-01","08-24"];

$(function(){
    $("#datepicker").datepicker(
        {
            minDate: new Date(),
            beforeShowDay: function (date) {
                var string = jQuery.datepicker.formatDate('mm-dd', date);
                var noWeekend = $.datepicker.noWeekends(date);
                if (noWeekend[0]) {
                    return [ holidays.indexOf(string) === -1 ]
                }
                else
                    return noWeekend;
            },
            onSelect: function(date){setTimeout(function() {
                $('#dialogText').html(date);
                dialogElem.dialog('open');
            },2000)}
        }
    );
});

