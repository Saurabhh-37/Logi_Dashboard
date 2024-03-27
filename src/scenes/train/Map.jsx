import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./mapstyles.css";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";
import Routing from "./Routing";
import { mockDataTeam } from "../../data/mockData";
import truckImage from "./images/truck.avif";

function MapCard({ timestamp }) {
    return (
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
                border: "2px", // Adding a border
                display: "flex", // Use flexbox for layout
                justifyContent: "space-between", // Align columns at the start and end of the card
                alignItems: "center", // Center content vertically
            }}
        >
            {/* First column with image */}
            <CardContent style={{ flex: 1 }}>
                <img
                    src={truckImage}
                    alt="Truck Image"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }} // Adjust image size and behavior
                />
            </CardContent>
            
            {/* Second column */}
            <CardContent style={{ flex: 1 }}>
                <Typography>ID: {mockDataTeam[0].id}</Typography>
                <Typography>Driver: {mockDataTeam[0].driver}</Typography>
                <Typography>RC: {mockDataTeam[0].rc}</Typography>
                <Typography>Route: {mockDataTeam[0].route}</Typography>
                <Typography>Distance: {mockDataTeam[0].distance}</Typography>
                <Typography>Status: {mockDataTeam[0].status}</Typography>
                <Typography>Fuel: 75%</Typography>
            </CardContent>
            
            {/* Third column */}
            <CardContent style={{ flex: 1 }}>
                <Typography>Speed: 65 kmph</Typography>
                <Typography>Temperature: 20°C</Typography>
                <Typography>Load: 8000 KGs</Typography>
                <Typography>Air Brake Pressure: 90</Typography>
                <Typography>Battery: Good</Typography>
                <Typography>Latitude: {mockDataTeam[0].latitude}</Typography>
                <Typography>Longitude: {mockDataTeam[0].longitude}</Typography>
                <Typography>Timestamp: {mockDataTeam[0].timestamp}</Typography>
            </CardContent>
        </Card>
    );
}

export default function Map() {
    const position = [18.5204, 73.8567];
    const [latitudeInput, setLatitudeInput] = useState("");
    const [longitudeInput, setLongitudeInput] = useState("");
    const [timestamp, setTimestamp] = useState(mockDataTeam[0].timestamp);

    const updateCoordinates = () => {
        // Update mock data with user input values
        mockDataTeam[0].latitude = latitudeInput;
        mockDataTeam[0].longitude = longitudeInput;
        // Update timestamp
        setTimestamp(new Date().toISOString());
        // Clear input fields
        setLatitudeInput("");
        setLongitudeInput("");
    };

    useEffect(() => {
        // Update timestamp every second
        const interval = setInterval(() => {
            setTimestamp(new Date().toISOString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: "relative", height: "100vh"}}>
             {/* Card 1 above the map top left */}
             <Card
                style={{
                    position: "absolute",
                    zIndex: 2, // Set z-index higher than map container
                    top: "10px", // Aligning the card to the top
                    left: "10px", // Aligning the card to the left
                    width: "25%", // Adjust the width as needed
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                <CardContent>
                    <TextField
                        id="latitudeInput"
                        label="Latitude"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        value={latitudeInput}
                        onChange={(e) => setLatitudeInput(e.target.value)}
                    />
                    <TextField
                        id="longitudeInput"
                        label="Longitude"
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        value={longitudeInput}
                        onChange={(e) => setLongitudeInput(e.target.value)}
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={updateCoordinates}>
                        Update
                    </Button>
                </CardContent>
            </Card>
            
            {/* Card over MapContainer */}
            <MapCard timestamp={timestamp} />

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
