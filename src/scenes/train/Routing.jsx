import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { mockDataTeam } from "../../data/mockData"; // Import mock data

// Initialize marker for tracking
const marker = L.marker([0, 0]);

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function Routing() {
    const map = useMap();
    const intervalRef = useRef(null); // Ref to store interval

    useEffect(() => {
        if (!map) return;

        // Routing
        const routingControl = L.Routing.control({
            waypoints: [L.latLng(18.5204, 73.8567), L.latLng(18.5904, 73.7272)],
            lineOptions: {
                styles: [
                    {
                        color: "blue",
                        opacity: 0.6,
                        weight: 4,
                    },
                ],
            },
            routeWhileDragging: true,
        }).addTo(map);

        // Tracking
        const trackData = () => {
            // Get new latitude and longitude from mock data
            const latitude = mockDataTeam[0].latitude;
            const longitude = mockDataTeam[0].longitude;

            // Update marker position
            marker.setLatLng([latitude, longitude]).addTo(map);

            // Pan the map to the new position
            map.panTo([latitude, longitude]);
        };

        // Start tracking at an interval
        intervalRef.current = setInterval(trackData, 5000); // Update every 5 seconds

        // Cleanup: Stop tracking when component unmounts
        return () => clearInterval(intervalRef.current);
    }, [map]);

    return null;
}
