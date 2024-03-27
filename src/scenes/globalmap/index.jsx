import { Box, Card, CardContent } from "@mui/material";
import Header from "../../components/Header";
import Map from "../train/Map";

const GlobalMap = () => {
    return (
        <Box m="20px">
        <Card style={{ width: "100%", height: "80vh" }}>
            <CardContent style={{ width: "100%", height: "100%" }}>
                <Map />
            </CardContent>
        </Card>
        </Box>
    )
}

export default GlobalMap;