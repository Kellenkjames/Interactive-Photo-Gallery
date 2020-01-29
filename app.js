// HANDLE CONTENT FILTERING 


// Get the value of the search field whenever a user types in that field and log that value
$('#mySearch').on('keyup', function () {
    let searchValue = $('#mySearch').val();
    console.log(searchValue.toLowerCase());
});

// Next, start trying to target the entire caption by using the getAttribute() method, 
// then looping and logging all lowercase version of the captions to the console. 
$('.item a').each(function () {
    let caption = $(this).data("title");
    console.log(caption);
    // console.log( index + ": " + $( this ).text() + caption );

});





