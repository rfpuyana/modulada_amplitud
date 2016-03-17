
// MARKERS DATA ARE FOUND IN markers_data.js

// setup
var map;
var my_markers = []

// Google Maps functions
function initMap() {  
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 11.25378, lng: -73.54848},
        zoom: 4
    });
          
    for(array_pos in my_data){
        
        console.log(my_data[array_pos]);
        my_markers[array_pos] = new google.maps.Marker({
            name:my_data[array_pos][4],
            map: map,
            position: {lat:my_data[array_pos][0], lng:my_data[array_pos][1]},        
            title: my_data[array_pos][2],
            soundcloud: my_data[array_pos][3]
        });
        
    };
    

    console.log(my_markers);
    

// historic of simple implementations
    
/*    
    var col_palomino_1_marker = new google.maps.Marker({
        map: map,
        position: {lat:my_data[array_pos][0], lng:my_data[array_pos][1]},        
        title: my_data[array_pos][2],
        soundcloud: my_data[array_pos][3]
        
    });
    
*/
/*    
    var col_palomino_1_marker = new google.maps.Marker({
        map: map,
        position: {lat: 11.25378, lng: -73.54848},        
        title: 'Click to zoom',
        soundcloud: 'url 2 soundcloud'
        
    });
*/    
}
