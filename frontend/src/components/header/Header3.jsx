import Container from "@mui/material/Container"
import {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import {  Box, Drawer, IconButton, ListItemIcon, ListItemText, Stack, Typography, useTheme } from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import CloseIcon from '@mui/icons-material/Close';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from "./Links";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';



function Header3() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

        const [state, setState] = useState({
            top: false,
            left: false,
            bottom: false,
            right: false,
        });
        
        const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
            }
        
            setState({ ...state, [anchor]: open });
        };





    const theme = useTheme()
    return (
<Container sx={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"2px solid #00ffff2e",pb:"15px",borderBottomRightRadius: "70px",
            borderBottomLeftRadius: "70px"}}>
            <Box>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                // @ts-ignore
                sx={{width:220,bgcolor: theme.palette.myColor.main ,
                    color:theme.palette.text.secondary
                }}
            >
                <WindowOutlinedIcon />
                <Typography
                sx={{
                    padding:"0",
                    textTransform:"capitalize",
                    mx: 1
                }}>
                Categories
                </Typography>
                <Box flexGrow={1} />
                <KeyboardArrowRightRoundedIcon />
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                sx={{width:220,".MuiPaper-root MuiPaper-elevation":{width:200}}}

            >
                
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <SportsEsportsIcon fontSize="small" sx={{color:"#fff"}}/>
                    </ListItemIcon>
                    <ListItemText>Games</ListItemText>
                    
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <ElectricBikeIcon fontSize="small" sx={{color:"#fff"}}/>
                    </ListItemIcon>
                    <ListItemText>bikes</ListItemText>
                    
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <MenuBookRoundedIcon fontSize="small" sx={{color:"#fff"}}/>
                    </ListItemIcon>
                    <ListItemText>Books</ListItemText>
                    
                </MenuItem>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <LaptopChromebookRoundedIcon fontSize="small" sx={{color:"#fff"}}/>
                    </ListItemIcon>
                    <ListItemText>electronics</ListItemText>
                    
                </MenuItem>
















            </Menu>
            </Box>

            
            {useMediaQuery("(min-width:900px)") && (
                <Stack gap={4} direction={"row"} alignItems={"center"}>
                <Links title={"Home"} />
                <Links title={"Mega Menu"} />
                <Links title={"Full Screen Menu"} />
                <Links title={"pages"} />
                <Links title={"User Account"} />
                <Links title={"Vendor Account"} />
                </Stack>
            )}











            






















            {useMediaQuery('(max-width:900px)') && <IconButton  onClick={toggleDrawer("top", true)}>
                <MenuRoundedIcon />
            </IconButton>}
            <Drawer
                    anchor={"top"}
                    open={state["top"]}
                    onClose={toggleDrawer("top", false)}
                    
                    
                    
                    >
                

                    <Box sx={{width:444,mx: "auto",mt:6,position:"relative",bgcolor: "#00ffff88",borderRadius:"20px",pt:"60px"}}>
                        <IconButton sx={{":hover": {rotate:"180deg",transition: "0.5s"},position: "absolute",top:0,right:0}}  onClick={toggleDrawer("top", false)}>
                        <CloseIcon sx={{color:"black"}}/>
                        </IconButton>
                            {[
                { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
                { mainLink: "Mega menu", subLinks: ["Link 1", "Link 2", "Link 3"] },
                {
                mainLink: "full screen menu",
                subLinks: ["Link 1", "Link 2", "Link 3"],
                },
                { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
                {
                mainLink: "user account",
                subLinks: ["Link 1", "Link 2", "Link 3"],
                },
                {
                mainLink: "vendor account",
                subLinks: ["Link 1", "Link 2", "Link 3"],
                },
            ].map((item) => {
                return (
                        <Accordion key={item.mainLink} elevation={0} sx={{bgcolor: "#00ffff14"}}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{color:"black"}} />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                                >
                                <Typography component="span">{item.mainLink}</Typography>
                                </AccordionSummary>
                                
                                <List sx={{mt:"-25px",mb:"-15px",}}>
                                {item.subLinks.map((link) => {
                                        return(
                                            <ListItem key={link} disablePadding>
                                            <ListItemButton>
                                            <ListItemText primary="link" />
                                            </ListItemButton>
                                        </ListItem>
                                        );
                                    })}
                                    </List>
                                
                            </Accordion>
            )
            })}


                    </Box>
            </Drawer>

        </Container>
    )
    }

export default Header3


