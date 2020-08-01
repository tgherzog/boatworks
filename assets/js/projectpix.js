
$(document).ready(function() {

    $('img[src^="images/"]').each(function() {
        // wrap the image in a div: this lets us center the image and possibly add a caption
        $(this).wrap($('<div/>').addClass('image-wrapper'));
        var wrapper = $(this).parent();

        var parts = $(this).attr('src').match(/^(images\/.+)-web(\.\w+)$/);
        if( parts ) {
            // wrap the the image in a link to its high-res counterpart
            $(this).wrap($('<a/>').attr('href', parts[1] + parts[2]).attr('target', '_blank'));
        }

        if( $(this).attr('title') ) {
            // add the title attribute explicitly as text
            wrapper.append($('<span/>').addClass('title').append($(this).attr('title')));
        }
    });
});
