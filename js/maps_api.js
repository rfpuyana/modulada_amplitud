
// setup
var map;
var array_markers = [];
var array_infoWindows = [];

// Google Maps functions


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 11.25378, lng: -73.54848},
        zoom: 4
    });
          
    
    
    for(a in markers_data){  
        array_markers[a] = new google.maps.Marker({
            name:markers_data[a][4],
            map: map,
            position: {lat:markers_data[a][0], lng:markers_data[a][1]},        
            title: markers_data[a][2],
            soundcloud: markers_data[a][3],
            infowindow: null,
            posInArray:a

        });
        
        
        var contentString =
            '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>'+
                '<div id="bodyContent">'+
                '<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+markers_data[a][3]+'&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>'
                '</div>'+
            '</div>';
        
        
        array_infoWindows[a] = new google.maps.InfoWindow({
            content: array_markers[a].soundcloud
        });    
        
    };
    
    function assignListeners(marker) {
        marker.addListener('click', function() {
            array_infoWindows[marker.posInArray].open(map, marker);
        });                
    }    

    array_markers.forEach(assignListeners);
/*    
    array_markers[0].addListener('click', function() {
        array_infoWindows[0].open(map, array_markers[0]);
    });        
*/
};


