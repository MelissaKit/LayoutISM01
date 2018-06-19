$( function() {
    $.widget( "custom.iconselectmenu", $.ui.selectmenu, {
        _renderItem: function( ul, item ) {
            var li = $( "<li>" ),
                wrapper = $( "<div>", { text: item.label } );

            if ( item.disabled ) {
                li.addClass( "ui-state-disabled" );
            }

            $( "<span>", {
                class: "ui-icon "
            }).appendTo( wrapper );

            return li.append( wrapper ).appendTo( ul );
        }
    });

    $( "#product" ).iconselectmenu({
    classes: {
        "ui-selectmenu-menu": "ui-menu-icons optionImage"
    }
    });

} );