function initMap() {
    var options = {
        center: {lat:-28.4819 , lng:-49.0058 },
        zoom: 8
    }

    map = new google.maps.Map(document.getElementById("map"),options)


    google.maps.event.addListener(map, "click",(event)  => {
        addMarker({location:event.latLng});
    })

   let MarkerArray = [
        addMarker({location:{lat:-28.4819 , lng:-49.0058}, imageIcon:"http://img.icons8.com/nolan/2x/marker.png", content: `<h2>Murcia City</h2>`}),
        addMarker({location:{lat:-28.4835 , lng:-48.7665}, content: `<h2>Murcia City</h2>`}),
    ]

    for(let i= 0; i < MarkerArray.length; i++){
        addMarker(MarkerArray[i]);
    }

    function addMarker(property){
        const marker = new google.maps.Marker({
            position:property.location,
            icon:property.imageIcon,
            map:map
        });
        

        if(property.imageIcon){
            marker.setIcon(property.imageIcon)
        }

        if(property.content){
            const detailWindow =  new google.maps.InfoWindow({
            content: property.content
            });

            marker.addListener("click",() =>{
                detailWindow.open(map, marker)
            })
        }

        

    }


}