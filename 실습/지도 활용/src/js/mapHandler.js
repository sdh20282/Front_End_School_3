async function getData() {
    try {
        const response = await fetch('https://api.odcloud.kr/api/15096996/v1/uddi:6738a90c-ec96-4245-a187-9528cea62904?page=1&perPage=10&serviceKey=3MCBWEYPV4%2BY4Un8XqdBpFBiaGQKGsEVpC1HIK1DCoHqjNlhaUGcwjBIJGDYeTaTOiG4GKJorKXpGpfNpOEjhQ%3D%3D');

        return response.json();
    } catch (error) {
        alert(error);
    }
}

async function renderData() {
    const result = await getData();

    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
    script.async = true;

    window.initMap = function () {
        const jeju = { lat: 33.3616658, lng: 126.5204118 };
        const map = new google.maps.Map(
            document.getElementById("map"),
            {
                center: jeju,
                zoom: 10,
            }
        );

        for (const locationData of result.data) {
            const location = { lat: parseFloat(locationData['위도']), lng: parseFloat(locationData['경도']) };

            new google.maps.Circle({
                strokeColor: "#09EB00",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#78E6A4",
                fillOpacity: 0.35,
                map,
                center: location,
                radius: 600,
            });

            new google.maps.Marker({
                position: location,
                map: map,
            });
        }
    };

    document.head.appendChild(script);
}

renderData();