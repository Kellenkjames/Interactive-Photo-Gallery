// HANDLE IMAGE FILTERING
const searchBar = $('#mySearch');

searchBar.on('keyup', function(e) {
    
    // Grab the search term and convert to lower case.
    const term = e.target.value.toLowerCase();
    
    // Grab all of the captions, cycle through each one and log.
    $('.item a').each(function () {
        const caption = $(this).attr("data-title").toLowerCase();
        
        // If search term is in the caption, show the image/s associated to the caption.
        if (caption.toLowerCase().indexOf(term) != -1) {
            $(this).show();
            
        } // Otherwise, hide the image/s if the search term is not in the caption. 
        else {
            $(this).hide();
        }
        
    });
    
}); 


























