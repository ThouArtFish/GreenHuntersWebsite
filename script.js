var map = L.map('map').setView([51.5137127388945, -0.328622839666242], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const park1 = L.marker([51.51079905310003, -0.3203868166665128]).addTo(map);

park1.bindPopup("W13 9LX");

function onMarkerClick(e) {
    let info = document.getElementById("location_info");
    info.children[0].textContent = "Dean Gardens, Ealing";
    info.children[1].textContent = "Saturday 5th October";
    if (info.children.length == 2) {
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        li1.textContent = "11am - 3pm";
        li2.textContent = "Make sure to bring your parents and read the rules!"
        info.appendChild(li1);
        info.appendChild(li2);
    }
};

park1.on("click", onMarkerClick);
