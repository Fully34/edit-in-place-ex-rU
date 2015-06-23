$(document).ready(function(){

'use strict';

//===========================================================================//
                        /* ~~~ NEW TITLE ~~~ */ 
//===========================================================================//
    
//============================== NEW SECTION ==============================//

    $('.bio-content').one('click', function() {

        $(this > 'p').css({

            'visibility' : 'hidden',
        });

        $(this).prepend('<input class="input">');
    });

    $('.input').on('blur', function() {

        $('.input').remove();
    });
});