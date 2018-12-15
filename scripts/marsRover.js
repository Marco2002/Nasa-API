var key = 'iJC62uJJvYmPsDQjHl6GVzekvBbmr1J4dOZk7zVF';
var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=' + key;

$('#image').css('display', 'none');

$('#submit').click(makeRequest);

function makeRequest(event) {
    var camera = $('#camera').val();
    var sol = $('#sol').val();
    var requestUrl = url + '&camera=' + camera + '&sol=' + sol;

    $.ajax({
        url: requestUrl,
        success: function(result){
            console.log(result);
            result.photos.forEach(function(photo) {
                $('#rover-image').attr('src', photo.img_src);
            });
                
        }
    });
};

makeRequest();

console.log('marsRover.js active');
