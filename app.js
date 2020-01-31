// HANDLE CONTENT FILTERING 

// function contentFilter() {
    
//     // Get the value of the search field whenever a user types in that field and log that value
//     $('#mySearch').on('keyup', function () {
//         let value = $('#mySearch').val().toLowerCase();
//         // Next, start trying to target the entire caption by using the getAttribute() method, 
//         // then looping and logging all lowercase version of the captions to the console. 
//         $('item a').filter(function () {
//             $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
//         });
//         console.log(value);        
//     }); 
// };

// contentFilter();

// HANDLE CONTENT FILTERING 
const searchBar = $('#mySearch');

searchBar.addEventListener('keyup', function(e) {

    // Grab the search term and convert to lower case.
    const term = e.target.val().toLowerCase();

    // Target the entire caption 
    const captions = $('ul').getElementsByTagName('li');

    // Create an array
    Array.from(captions).forEach(function(caption) {
        const title = caption.
    })

});











