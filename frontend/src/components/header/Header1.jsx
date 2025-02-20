import   { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton,Stack,Typography, useTheme } from "@mui/material";
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BrightnessLowOutlinedIcon from '@mui/icons-material/BrightnessLowOutlined';
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from '@mui/material/Container';

    const options = [
        'AR',
        'EN',
    
    ];
    






    function Header3() {
        const colorMode = useContext(ColorModeContext);
            const theme = useTheme();

                const [anchorEl, setAnchorEl] = useState(null);
                const [selectedIndex, setSelectedIndex] =useState(1);
                const open = Boolean(anchorEl);
                const handleClickListItem = (event) => {
                setAnchorEl(event.currentTarget);
                };
            
                const handleMenuItemClick = (event, index) => {
                setSelectedIndex(index);
                setAnchorEl(null);
                };
            
                const handleClose = () => {
                setAnchorEl(null);
                };





    return (
            <Box sx={{bgcolor: "#283445c4",py:"5px",borderBottomLeftRadius:"250px",borderBottom: "2px solid #00ffff2e"}}>
                <Container>
                <Stack direction={"row"} alignItems={"center"}>
                <Typography sx={{
                    mr: 2,
                    p: "3px 10px",
                    bgcolor: "#D23f57",
                    borderRadius:"12px",
                    fontSize:"bold",
                    fontWeight:"bold",
                    color:"#fff",
                    ml:"15px"
                }}
                variant="body2">
HOT
                </Typography>
                <Typography
                sx={{
                    fontSize:"0.9rem",
                    fontWeight: 300,
                    color:"#fff",
                    letterSpacing:"1.5px"
                }}
                variant="body2">
                    free Express shipping
                </Typography>


<Box flexGrow={"1"} />

                <div>
                {theme.palette.mode === "light" ? (
                    <IconButton
                        onClick={() => {
                        localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                        );
                        colorMode.toggleColorMode();
                        }}
                        color="inherit"
                    >
                        <BrightnessLowOutlinedIcon />
                    </IconButton>
                    ) : (
                    <IconButton
                    onClick={() => {
                        localStorage.setItem(
                            "mode",
                            theme.palette.mode === "dark" ? "light" : "dark"
                        );
                        colorMode.toggleColorMode();
                        }}
                        color="inherit"
                    >
                        <BedtimeIcon />
                    </IconButton>
                    )}
                </div>

                    <List
            component="nav"
            
        >
            <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
                        
            sx={{"&:hover":{cursor:"pointer",bgcolor:"#32435eeb"}}}
            >
            <ListItemText
                
                secondary={options[selectedIndex]}
                color="#fff"
            />
            <ExpandMoreIcon sx={{fontSize:"16px",color:"#fff"}} />
            </ListItemButton>
        </List>
        <Menu
            
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
            }}
        >
            {options.map((option, index) => (
            <MenuItem
            sx={{fontSize: "11px",p: "3px 10px",minHeight:"10px",}}
                key={option}
                
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
            >
                {option}
            </MenuItem>
            ))}
        </Menu>



























                <TwitterIcon
                sx={{
                    fontSize:"1.6rem",
                    color:"#fff"
                }}
                />
                <FacebookIcon 
                sx={{
                    fontSize: "1.6rem",
                    mx:1,
                    color: "#fff"
                }}
                />
                <InstagramIcon
                sx={{
                    fontSize: "1.6rem",
                    color:"#fff"
                }}
                />


                </Stack>
                </Container>
            </Box>
            );
        };
    export default Header3