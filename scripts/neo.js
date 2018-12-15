var key = 'iJC62uJJvYmPsDQjHl6GVzekvBbmr1J4dOZk7zVF';

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + ("0" + today.getDate()).slice(-2);

var baseUrl = 'https://api.nasa.gov/neo/rest/v1/feed?api_key=' + key;

var url = baseUrl + '&start_date=' + date + '&end_date=' + date;

$.ajax({
    url: url,
    success: function(result){
        console.log(result);
        var i = 0;

        result.near_earth_objects[date].forEach(function(neo) {
            
            $('#content').prepend(
                '<div class="container card neo-container">' +
                    '<h1>Asteroid '+ (result.near_earth_objects[date].length - i) +'</h1>' +
                    '<p><strong>Name</strong>: '+ neo.name +'m</p>' +
                    '<p><strong>min-Durchmesser</strong>: '+ neo.estimated_diameter.meters.estimated_diameter_min +'m</p>' +
                    '<p><strong>max-Durchmesser</strong>: '+ neo.estimated_diameter.meters.estimated_diameter_max +'m</p>' +
                    '<p><strong>der Erde gefährlich</strong>: '+ (neo.is_potentially_hazardous_asteroid ? 'ja' : 'nein') +'</p>' +
                    '<p><strong>Geschwindigkeit</strong>: '+ neo.close_approach_data[0].relative_velocity.kilometers_per_second + 'km/s</p>' +
                    '<p><strong>verfehlt die Erde um</strong>: '+ neo.close_approach_data[0].miss_distance.kilometers +'km</p>' +
                '</div>'
            );
            i++;
        });
    }
});

$('#sub-date').click(function() {
    $.ajax({
    url: baseUrl + '&start_date='+ $('#date').val() + '&end_date=' + $('#date').val(),
    success: function(result){
        console.log(result);
        var i = 0;

        $('.neo-container').remove();

        result.near_earth_objects[$('#date').val()].forEach(function(neo) {
            
            $('#content').prepend(
                '<div class="container card neo-container">' +
                    '<h1>Asteroid '+ (result.near_earth_objects[$('#date').val()].length - i) +'</h1>' +
                    '<p><strong>Name</strong>: '+ neo.name +'m</p>' +
                    '<p><strong>min-Durchmesser</strong>: '+ neo.estimated_diameter.meters.estimated_diameter_min +'m</p>' +
                    '<p><strong>max-Durchmesser</strong>: '+ neo.estimated_diameter.meters.estimated_diameter_max +'m</p>' +
                    '<p><strong>der Erde gefährlich</strong>: '+ (neo.is_potentially_hazardous_asteroid ? 'ja' : 'nein') +'</p>' +
                    '<p><strong>Geschwindigkeit</strong>: '+ neo.close_approach_data[0].relative_velocity.kilometers_per_second + 'km/s</p>' +
                    '<p><strong>verfehlt die Erde um</strong>: '+ neo.close_approach_data[0].miss_distance.kilometers +'km</p>' +
                '</div>'
            );
            i++;
        });
    }
});
});

console.log('neo.js active');
