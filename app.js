// HANDLE CONTENT FILTERING 


// Get the value of the search field whenever a user types in that field and log that value
$('#mySearch').on('keyup', function (e) {
    let searchValue = $('#mySearch').val();
    console.log(searchValue);
});