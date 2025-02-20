// @ts-nocheck
import { Box,Badge, Container, Dialog, IconButton, Stack, Typography, useTheme,CircularProgress,  Rating } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {  useState } from "react";
// import Rating from '@mui/material/Rating';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import ProductDetails from "./ProductDetails";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

import { useGetproductByNameQuery } from '../../redex/product'
    function Main() {
        // const Api ="http://localhost:1337/api/products";
        // const [art,setArt] =useState([]);
        // useEffect(() => {
        //     fetch(Api).then((res) => res.json()).then((data) => setArt(data.data)).catch((error)=>console.log("error",error))
                
            
            
                
            
            
        // },[])
        

        // const [data,setData] =useState([""])
        // const daee=data;


        // const [ope, setOpe] = useState(false);

        //     const handleClickOpe = () => {
        //     setOpe(true);
        //     };
        
        //     const handleClos = () => {
        //     setOpe(false);
        //     };


        const allProductsAPI = "products?populate=*";
        const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
        const womenCategoryAPI = "products?populate=*&filters[category][$eq]= women";
        
        const [myDate, setmyDate] = useState(allProductsAPI);
        const { data, error, isLoading } =useGetproductByNameQuery(myDate)
if (data) {
        console.log(data)
}

        // const [alignment, setAlignment] = useState('left');
        const [count,setCount]= useState(0);
        const handleAlignment = (event, newValue) => {
            
                setmyDate(newValue);
                
            };
        const [open, setOpen] = useState(false);

            const handleClickOpen = () => {
                setOpen(true);
            };
            
            const handleClose = () => {
            setOpen(false);
            };
            const StyledBadge = styled(Badge)(({ theme }) => ({
                '& .MuiBadge-badge': {
                right: -3,
                top: 13,
                border: `2px solid ${theme.palette.background.paper}`,
                padding: '0 4px',
                },
            }));
        const theme = useTheme();
if (isLoading) {
    return (
        <Box sx={{ py: 11, textAlign: "center" }}>
            <CircularProgress />
        </Box>
        );
    }

    if (error) {
        return (
        <Container
            sx={{
            py: 11,
            textAlign: "center",
            }}
        >
            <Typography variant="h6">
            {
                
                // @ts-ignore
                error.error
            }
            </Typography>

            <Typography variant="h6">Please try again later</Typography>
        </Container>
        );
    }
if (data) {
        return (
        <Container sx={{py:9}}>
            
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"}>
                <Box className="mmmmm">
                    <Typography variant="h6">
                        Selected 
                        prodects
                    </Typography>
                    <Typography variant="body1" fontWeight={300}>
                    All our new arrivals in a exclusive brand selection
                    </Typography>
                </Box>
                <Button sx={{textTransform:"capitalize"}} size="large" onClick={() => {
                    handleClickOpen()
                }
                }>
                <StyledBadge 

                    badgeContent={count} color="error">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </Button>




                <ToggleButtonGroup
                        
                        sx={{".Mui-selected":{backgroundColor:"#00c7c7 !important",border:"5px solid #57c0c054"}}}
                        value={myDate}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        >
                        <ToggleButton className="button" sx={{borderRadius:"12px !important",color:theme.palette.text.primary}} value={allProductsAPI }aria-label="left aligned">
                        All Products
                        </ToggleButton>
                        <ToggleButton className="button" sx={{borderRadius:"12px !important" ,color:theme.palette.text.primary}} value={menCategoryAPI} aria-label="centered">
                        MEN category
                        </ToggleButton>
                        <ToggleButton className="button" sx={{borderRadius:"12px !important" ,color:theme.palette.text.primary}} value={womenCategoryAPI} aria-label="right aligned">
                        Women category
                        </ToggleButton>
                </ToggleButtonGroup>


            </Stack>

            <Stack direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"}>
            {data.data.map((item) => {
                return (
                    <Card
                    
                    component="div"
                    layout
                    initial={{ transform: "scale(0)" }}
                    animate={{ transform: "scale(1)" }}
                    transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                    key={item}
                    sx={{
                        maxWidth: 333,
                        mt: 6,
                        ":hover .MuiCardMedia-root ": {
                        rotate: "1deg",
                        scale: "1.1",
                        transition: "0.35s",
                        },
                    }}
                    >
                    <CardMedia
                        sx={{ height: 277 }}
                        // @ts-ignore
                        image={`http://localhost:1337${item.attributes.img.data[0].attributes.url}`}
                        title="green iguana"
                    />

                    <CardContent>
                        <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        >
                        <Typography gutterBottom variant="h6" component="div">
                            {item.attributes.title}
                        </Typography>

                        <Typography variant="subtitle1" component="p">
                            ${item.attributes.price}
                        </Typography>
                        </Stack>

                        <Typography variant="body2" color="text.secondary">
                        {item.attributes.desc}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{ justifyContent: "space-between" }}>
                        <Button
                        onClick={() => {
                            handleClickOpen();
                            // setclickedProduct(item);
                        }}
                        sx={{ textTransform: "capitalize" }}
                        size="large"
                        >
                        <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small"/>
                        add to cart
                        </Button>
                        <Rating
                        precision={0.1}
                        name="read-only"
                        value={item.attributes.rat}
                        readOnly
                        />
                    </CardActions>
                    </Card>
                );
                })}
            </Stack>

            
            <Dialog
                    sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },height:"600px",borderRadius:"" }}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <IconButton sx={{
                        ":hover": {color:"#bfffff"},position: "absolute",top:0,right:0}}  onClick={handleClose}>
                        <CloseIcon sx={{color:"aqua",":hover":{color:"#bfffff"}}}/>
                        </IconButton>
                        {/* <ProductDetails/> */}
                        <Box display={"flex"}alignItems={"center"} gap={"20px"} sx={{flexDirection:{xs:"column",sm:"row"},border:"1px solid aqua",pb:"12px",px:"5px"}}>
            <Box>
                <img className="aaaa" width={400} height={400} src="src\components\main\banner-15.jpg" alt="" />
            </Box>
            <Box sx={{textAlign:{xs:"center",sm:"left"}}}>
                <Typography variant="h5">
                    men fashion
                </Typography>
                <Typography my={0.5} fontSize={"22px"} color="red">
                    $12.99
                </Typography>
                <Typography fontSize={"13px"} sx={{display:"flex",flexWrap:"wrap",}}>
                    Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Accusantium, fuga.
                </Typography>
                <Stack direction={"row"} gap={1} my={2}>
                    
                    {["src\\components\\main\\banner-15.jpg","src\\components\\main\\AdobeStock_439372115_Preview.jpeg","src\\components\\main\\AdobeStock_439372115_Preview.jpeg"].map((item) => {
                        return(


                            <img  key={item} src={item} alt="" style={{ borderRadius: 3 }} height={100}width={100}/>
                        )
                    }
                    )}
                </Stack>
                <Button onClick={() => {
                handleClickOpen()
                setCount(count+1)
                
                }
                }
                variant="contained" sx={{textTransform:"capitalize"}}>
                <AddShoppingCartIcon sx={{mr:"10px"}}/>
                add to card
                </Button>
            </Box>
                        </Box>
            </Dialog>























        </Container>
    )
}

    
}
    
    


export default Main ;


