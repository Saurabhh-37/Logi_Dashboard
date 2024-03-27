import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import Map from "./Map";

const Train = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "Truck ID" },
        {
            field: "driver",
            headerName: "Driver",
            flex: 1,
            cellClassName: "name-column-cell",
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
            headerName: "Status",
            flex: 1,
            renderCell: ({ row: { status }}) => {
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
                                    : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {status}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleCard = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Box m="20px">
            <Header title="Trains" />
            <Card
                style={{
                    width: "100%",
                    height: isExpanded ? "75vh" : "5vh",
                    backgroundColor: isExpanded ? colors.grey[1000] : colors.blueAccent[700],
                    position: "relative",
                }}
            >
                <CardContent>
                    {/* <Typography variant="h6">Truck Details</Typography> */}
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={toggleCard}
                        style={{
                            position: "absolute",
                            top: "5px",
                            right: "5px",
                            width: "5vh",
                            height: "3vh",
                        }}
                    >
                        {isExpanded ? "Collapse" : "Expand"}
                    </Button>
                    {isExpanded ? (
                        <div>
                            <Typography>MapView</Typography>
                            <Map />
                        </div>
                    ) : (
                        <Typography sx={{ fontFamily: "Arial", fontSize: "14px" }}>
                            Map View
                        </Typography>
                    )}
                </CardContent>
            </Card>
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    display: isExpanded ? "none" : "block",
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column-cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuidataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`
                    },
                }}
            >
                <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
            </Box>
        </Box>
    );
};

export default Train;
