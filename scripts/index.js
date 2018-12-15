var key = 'iJC62uJJvYmPsDQjHl6GVzekvBbmr1J4dOZk7zVF';
var url = 'https://api.nasa.gov/planetary/apod?api_key=' + key;

$.ajax({
    url: url,
    success: function(result){
        console.log(result);

        if(result.media_type == 'video') {
            $('#video').attr('src', result.url);
        } else {
            $('#video').css('display', 'none'); 
            $('#apod').css('background-image', 'url(' + result.url + ')');

            var img = new Image();
            img.onload = function(){
                var h = this.height;
                var w = this.width;
                $('#apod').height((h * $('#apod').width()) / w);
            };
            img.src = result.url;
        }
        $('#explanation').text(result.explanation);
        $('#title').text(result.title);
    }
});

$('#sub-date').click(function() {
    $.ajax({
        url: url + '&date='+ $('#date').val(),
        success: function(result){
            console.log(result);

            if(result.media_type == 'video') {
                $('#apod').css('background-image', 'none'); 
                $('#video').css('display', 'inline'); 
                $('#video').attr('src', result.url);
            } else {
                $('#video').css('display', 'none');
                $('#apod').css('background-image', 'url(' + result.url + ')');

                var img = new Image();
                img.onload = function(){
                    var h = this.height;
                    var w = this.width;
                    $('#apod').height((h * $('#apod').width()) / w);
                };
                img.src = result.url;
            }
            $('#explanation').text(result.explanation);
            $('#title').text(result.title);
        }
    });
});

console.log('index.js active');
