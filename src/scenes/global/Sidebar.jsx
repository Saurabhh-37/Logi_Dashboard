import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens  } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapIcon from "@mui/icons-material/Map";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import WarehouseIcon from "@mui/icons-material/Warehouse";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
        active={selected === title}
        style={{
            color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to}/>
        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box
        sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",
            }
        }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100]
                    }}
                    >
                        {!isCollapsed && (
                            <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                            >
                                <Typography
                                variant="h3"
                                color={colors.grey[100]}
                                fontFamily="Julius Sans One"
                                >
                                    FLEETSIGHT
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            ></Box>
                            <Box textAlign="center">
                                <Typography
                                variant="h2"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0" }}
                                ></Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Global Map"
                        to="/globalmap"
                        icon={<MapIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{m:"15px 0 5px 20px"}}
                        >
                            Mode
                        </Typography>
                        <Item
                        title="Trucks"
                        to="/truck"
                        icon={<LocalShippingIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Train"
                        to="/train"
                        icon={<TrainIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Ship"
                        to="/ship"
                        icon={<DirectionsBoatFilledIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Flight"
                        to="/flight"
                        icon={<AirplanemodeActiveIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{m:"15px 0 5px 20px"}}
                        >
                            Storage
                        </Typography>
                        <Item
                        title="Warehouse"
                        to="/warehouse"
                        icon={<WarehouseIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Railway Warehouse"
                        to="/railwaywarehouse"
                        icon={<WarehouseIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Port"
                        to="/port"
                        icon={<WarehouseIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Airport"
                        to="/airport"
                        icon={<WarehouseIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    )
}

export default Sidebar;