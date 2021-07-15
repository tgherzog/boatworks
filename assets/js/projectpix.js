
$(document).ready(function() {

    $('img[src^="images/"]').each(function() {
        // Save the image's parent which should be a <p/>; we'll need its attributes
        var ip = $(this).parent();
        // wrap the image in a div: this lets us center the image and possibly add a caption
        $(this).wrap($('<div/>').addClass('image-wrapper'));
        var wrapper = $(this).parent();

        var gpic = ip.attr('gpic');
        var url = null;
        if( gpic )
            url = 'https://photos.google.com/' + gpic;
        else {
            var parts = $(this).attr('src').match(/^(images\/.+)-web(\.\w+)$/);
            if( parts )
                url = parts[1] + parts[2];
        }

        if( url ) {
            // wrap the the image in a link to its high-res counterpart
            $(this).wrap($('<a/>').attr('href', url).attr('target', '_blank'));
        }

        if( $(this).attr('title') ) {
            // add the title attribute explicitly as text
            wrapper.append($('<span/>').addClass('title').append($(this).attr('title')));
        }
    });
});
