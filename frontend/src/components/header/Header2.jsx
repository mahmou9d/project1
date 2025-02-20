import {  Container, IconButton, Stack, Typography } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState }  from 'react';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";




    const Search = styled('div')(({ theme }) => ({
        flexFlow:"1",
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border:"2px solid aqua",
        '&:hover': {
            border:"2px solid #00ffffd4",
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
        },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        },
    }));



        const options = [
            'All Catagories',
            'CAR',
            'Clothes',
            'Electronics',
            ];







function Header2() {



        
        

            const [anchorEl, setAnchorEl] = useState(null);
            const [selectedIndex, setSelectedIndex] = useState(0);
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

            const theme =useTheme()

    return (
        <Container sx={{my:3,display:"flex",justifyContent:"space-between",
            pb:"15px"
        }}>
            <Stack alignItems={"center"}>
                <ShoppingCartOutlinedIcon />
                <Typography variant="body2" sx={{mt:"10px"}}>
                    E-commerrce
                </Typography>
            </Stack>
                <Search sx={{borderRadius:"1rem",display:"flex"}}>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
                    <List
            component="nav"
            aria-label="Device settings"
            sx={{
                // @ts-ignore
                bgcolor: theme.palette.myColor.main ,
                borderBottomRightRadius:"1rem",
                borderTopRightRadius:"1rem",
                borderLeft:"0.5px solid aqua",
                p:"0",
                
            }}
        >
            <ListItemButton
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="when device is locked"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
            sx={{Width:150,
                textAlign:"center",
                "&:hover":{cursor:"pointer"},
                height: "50px"

            }}
            >
            <ListItemText
                
                secondary={options[selectedIndex]}
            />
            <ExpandMoreIcon sx={{fontSize:"16px",color:"#00BCD4"}} />
            </ListItemButton>
        </List>
        <Menu
        sx={{fontSize:"0px"}}
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
                key={option}
                
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
            >
                {option}
            </MenuItem>
            ))}
        </Menu>
            </Search>


            <Stack direction={"row"} alignItems={"center"}>
                    <IconButton aria-label="cart" sx={{mx:"10px"}}>

                    </IconButton>

                    <IconButton>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
            </Stack>
            
                


        </Container>
        
    )
    }

export default Header2
