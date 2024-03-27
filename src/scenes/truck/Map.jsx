import { MapContainer, TileLayer } from "react-leaflet";
import "./mapstyles.css";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, Typography } from "@mui/material";
import Routing from "./Routing";

const Map = () => {
    const position = [51.505, -0.09];

    return (
        <div style={{ position: "relative", height: "100vh" }}>
            {/* Card Over MapContainer */}
            <Card
            style={{
                position: "absolute",
                zIndex: 2,
                bottom: "33%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "90%",
                height: "20vh",
                padding: "10px",
                boxSizing: "border-box",
                border: "2px"
            }}
            >
                <CardContent>
                    <Typography>Map Container</Typography>
                </CardContent>
            </Card>

            {/* Map Container */}
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
    )
}

export default Map;