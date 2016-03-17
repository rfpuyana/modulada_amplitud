var map;
// Markers is an array with the proprty of each Marker
// lat
var my_data = [
    [11, -73, "Quilla", "soundcloud url"], //Palomino Feb 07
    [12, -74, "Palomino", "soundcloud url"] //Palomino Feb 07    
];

var my_markers = []

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
}
