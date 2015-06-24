'use strict';
var $; // Destroy this on deployment

$(document).ready(function(){


//===========================================================================//
                        /* ~~~ NEW TITLE ~~~ */ 
//===========================================================================//
    
//============================== NEW SECTION ==============================//

    var editing = false;

    $('.bio-content').on('click', function() {

        if (editing === false) {

            editing = true;

            // console.log($(this).children('p'))

            // Instead of adding and destroying content, just add and remove class="hidden"

            $(this).children('p').addClass('hidden');

            $(this).children('.input').removeClass('hidden');
            // Before I had:             
                //$(this).prepend('<textarea class="input"></textarea>');
                // Just adding elements is more work that adding and removing elements
        }
    });

    $('.input').on('keydown', function(){

        $(this).removeClass('grey');
    });

    // console.log($('.input'));

    $('.bio-content').on('blur','.input', function() {

        //$(this) === textarea class="input"

        // set variable to contain text from
        var newText = $(this).val();

        // console.log(newText);

        if (newText.length !== 0) {

            $(this).siblings('p').text(newText);
            // this === textarea class=".input" --> wanted to select its sibling

            // $(this).val('...');
        }

        $(this).siblings('p').removeClass('hidden');

        $('.input').addClass('hidden');
        // Before I had:
            // $('.input').remove();
            
        $(this).addClass('grey');

        editing = false;
    });
});