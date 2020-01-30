// HANDLE CONTENT FILTERING 


// Store value of the search input
const values = [];

function contentFilter() {
    
    // Get the value of the search field whenever a user types in that field and log that value
    $('#mySearch').on('keyup', function () {
        let searchValue = $('#mySearch').val();
        // console.log(searchValue.toLowerCase());
        // Push values to empty array
        values.push(searchValue);
        console.log(values);
    });
    
    // Next, start trying to target the entire caption by using the getAttribute() method, 
    // then looping and logging all lowercase version of the captions to the console. 
    $('.item a').each(function () {
        let caption = $(this).attr("data-title").toLowerCase();

        // Check if the current value of the search input is included within any of the captions
        // If so, log the associated image to the console. 
        
    });
    
    
    

    
}


contentFilter();









