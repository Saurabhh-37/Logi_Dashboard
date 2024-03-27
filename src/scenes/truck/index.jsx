import { Box, Card, CardContent, Typography, colors, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import React, { useState } from "react";
import Map from "../truck/Map";

const Truck = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "Truck ID" },
        {
            field: "driver",
            headerName: "Driver",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "rc",
            headerName: "RC Number",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "route",
            headerName: "Route",
            flex: 1,
        },
        {
            field: "distance",
            headerName: "Distance",
            flex: 1,
        },
        {
            field: "status",
            headerName: "Trip Status",
            flex: 1,
            renderCell: ({ row: { status } }) => {
                return (
                    <Box
                    width="60%"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={
                        status === "Active"
                        ? colors.greenAccent[600]
                        : status === "Inactive"
                        ? colors.redAccent[700]
                        :colors.greenAccent[700]
                    }
                    borderRadius="4px"
                    >
                        <Typography color={colors.grey[100]} sx = {{ ml: "5px"}}>
                            {status}
                        </Typography>
                    </Box>
                )
            }
        }
    ]


const [isExpanded, setIsExpanded] = useState(false);

const toggleCard = () => {
    setIsExpanded(!isExpanded);
}

return (
    <Box m="20px">
        <Header title="Truck"/>
        <Box onClick={toggleCard}>
            <Card
            style={{
                width:"100%",
                height: isExpanded ? "75vh":"5vh",
                backgroundColor: isExpanded
                ? colors.grey[1000]
                : colors.blueAccent[700]
            }}
            >
                {isExpanded ? (
                    <CardContent
                    style={{
                        width:"100%",
                        height:"100%",
                        alignItems:"center",
                        justifyContent: "center"
                    }}
                    >
                        <Typography>Map View</Typography>
                        <Map/>
                    </CardContent>
                ) : (
                    <CardContent
                    style={{
                        width:"100%",
                        height:"100%",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                    >
                        <Typography sx={{ fontFamily:"Arial", fontSize: "14px" }}>
                            {isExpanded ? "Expanded" : "Map View"}
                        </Typography>
                    </CardContent>
                )}
            </Card>
        </Box>
        <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
            display: isExpanded ? "none" : "block",
            "& .MuiDataGrid-root": {
                border: "none"
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none"
            },
            "& .name-column--cell": {
                color: colors.greenAccent[300]
            },
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none"
            },
            "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400]
            },
            "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700]
            },
            "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`
            }
        }}
        >
            <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
        </Box>
    </Box>
)
}

export default Truck;