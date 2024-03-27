import { MapContainer, TileLayer } from "react-leaflet";
import "./mapstyles.css";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, Typography } from "@mui/material";
import Routing from "./Routing";

export default function Map() {
    const position = [51.505, -0.09];

    return (
        <div style={{ position: "relative", height: "100vh"}}>
            {/* Card over MapContainer */}
            <Card
            style={{
                position: "absolute",
                zIndex: 2, // Set z-index higher than map container
                bottom: "33%", // Aligning the card to the center vertically
                left: "50%", // Aligning the card to the center horizontally
                transform: "translateX(-50%)", // Adjusting the position to center horizontally
                width: "90%",
                height: "20vh",
                padding: "10px",
                boxSizing: "border-box", // Padding will be applied outside the border
                border: "2px" // Adding a border
            }}
            >
                <CardContent>
                    <Typography>Input Card</Typography>
                </CardContent>
            </Card>

            {/* map Container */}
            <MapContainer
            center={position}
            zoom={13}
            style={{ position: "relative", height: "68vh", zIndex: 1}}
            >
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Routing />
            </MapContainer>
        </div>
    );
}