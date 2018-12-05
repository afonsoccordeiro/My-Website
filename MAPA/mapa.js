function myMap(){

    // definir uma localização

    const myLocation = new google.maps.LatLng(41.366829, -8.739617)

    //definir as propriedades do mapa

    const mapProp = {
        center: myLocation,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
        //criamos aqui uma propriedade stules:[
    }

    //definir o mapa
    const map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp)

        //criar Marcador

        var marker = new google.maps.Marker({
            position:myLocation,
            animation:google.maps.Animation.BOUNCE
            });
          
          marker.setMap(map);

          
}
