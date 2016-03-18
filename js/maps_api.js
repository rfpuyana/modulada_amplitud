
// MARKERS DATA ARE FOUND IN markers_data.js

// setup
var map;
var my_markers = [];
var array_infoWindows = [];

// Google Maps functions
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 11.25378, lng: -73.54848},
        zoom: 4
    });
          
    // In this array I grab data from 
    for (array_pos in markers_data) {
        my_markers[array_pos] = new google.maps.Marker({
            name: markers_data[array_pos][4],
            map: map,
            position: {lat: markers_data[array_pos][0], lng : markers_data[array_pos][1]},
            title: markers_data[array_pos][2],
            soundcloud: markers_data[array_pos][3],
            infowindow: null
        });
        
        
        //var sc_track_ID = 252443522;
        var contentString =
            '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>'+
                '<div id="bodyContent">'+
                '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+markers_data[array_pos][3]+'&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>'
                '</div>'+
            '</div>';
        
        
        array_infoWindows[array_pos] = new google.maps.InfoWindow({
           // content: contentString
            content: my_markers[array_pos].soundcloud
        });    
              
        
    };    

    
    my_markers[0].addListener('click', function() {
        array_infoWindows[0].open(map, my_markers[0]);
    });    
}  