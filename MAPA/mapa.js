function myMap(){

    // definir uma localização

    const myLocation = new google.maps.LatLng(41.366829, -8.739617)

    //definir as propriedades do mapa

    const mapProp = {
        center: myLocation,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }

    //definir o mapa
    const map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp)
}
