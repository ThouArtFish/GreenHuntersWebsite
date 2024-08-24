var map = L.map('map').setView([51.5137127388945, -0.328622839666242], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const park1 = L.marker([51.51079905310003, -0.3203868166665128]).addTo(map);
const park2 = L.marker([51.5062149420505, -0.3395800700750733]).addTo(map);
const park3 = L.marker([51.51956852804899, -0.33588858862885373]).addTo(map);

park1.bindPopup("W13 9LX");
park2.bindPopup("W7 2NY");
park3.bindPopup("W7 1NS");

function onMarkerClick(e) {
    let info = document.getElementById("location_info");
    switch (e.latlng) {
        case park1.getLatLng():
            info.children[0].textContent = "Dean Gardens";
            info.children[1].textContent = "Not Confirmed";
            break;
        case park2.getLatLng():
            info.children[0].textContent = "King George V Playing Field";
            info.children[1].textContent = "Not Confirmed";
            break;
        case park3.getLatLng():
            info.children[0].textContent = "Cuckoo Park";
            info.children[1].textContent = "Not Confirmed";
            break;
    }
};

park1.on("click", onMarkerClick);
park2.on("click", onMarkerClick);
park3.on("click", onMarkerClick);
