let options={
    enableHighAccuracy : true,
    timeout : 5000,
    maximunAge : 0
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(sucess, error, options)
}else{
    alert("La geolocalización no está disponible")
}


function sucess(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    let map = L.map('map',{
        center:[latitude,longitude],
        zoom: 14
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'Mi openStreetMap'
    }).addTo(map);

    let control = L.Routing.control({
        waypoints:[
            L.latLng(latitude, longitude),
            L.latLng(40.4413011,-3.6998982)
        ],
        language: 'es',
    }).addTo(map);
}

function error(){
    let map = L.map('map',{
        center:[40.4413011,-3.6998982],
        zoom: 14
})

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'Mi openStreetMap'}).addTo(map)
}




///19/40.4413011,-3.6998982 alonso cano 46, Chamberí, 28003 Madrid