import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function Routing() {
    const map = useMap();
    
    // useEffect(() => {
    //     if (!map) return;

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

        // return () => map.removeControl(routingControl);
    // });
    
    return null;
}