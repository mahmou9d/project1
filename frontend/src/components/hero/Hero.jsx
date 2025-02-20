// @ts-ignore
import { Box, Button, Container, Link, Stack, Typography} from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';
import IconSection from "./IconSection";



    function hero() {
    // @ts-ignore
    
    
    return (
        <Container >
            
        <Box sx={{display:"flex",mt:2.5,gap:2,alignItems:"center"}}>
        <Swiper
            loop={true}
                    pagination={{
                    dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    
                    >
                <SwiperSlide  className="parent-slider">
                    <img src="src\images\banner-15.jpg" alt="" />
                    <Box
                    sx={{
                        
                        position: "absolute",
                        left: "10%",
                        textAlign: "left",
                    }}

                    
                    >
                    <Typography
                        sx={{
                        color: "#222",
                        }}
                        variant="h5"
                        className="done"
                    >
                        LIFESTYLE COLLECTION
                    </Typography>

                    <Typography
                        sx={{
                        color: "#222",
                        fontWeight: "bold",
                        my: 1,
                        }}
                        variant="h3"
                        className="done"
                    >
                        MEN
                    </Typography>

                    <Stack
                        sx={{
                        justifyContent: { xs: "center", sm: "left" },
                        }}
                        direction={"row"}
                        alignItems={"center"}
                        className="done"
                    >
                        <Typography className="done" color={"#333"} mr={1} variant="h4">
                        SALE UP TO
                        </Typography>
                        <Typography className="done" color={"#D23F57"} variant="h4">
                        30% OFF
                        </Typography>
                    </Stack>
                    <Typography
                        sx={{
                        color: "#000",
                        fontWeight: 300,
                        my: 1,
                        }}
                        variant="body1"
                        className="done Box"
                    >
                        Get Free Shipping on orders over $99.00
                    </Typography>

                    <Button
                        sx={{
                        px: 5,
                        py: 1,
                        mt: "-4px",
                        backgroundColor: "#0fdada",
                        boxShadow: "0px 0px 6px 1px aqua",
                        color: "#fff",
                        borderRadius: "1px",
                        "&:hover": {
                            bgcolor: "#27e6e6",
                            boxShadow: "0px 0px 1px 1px aqua",
                        },
                        }}
                        variant="contained"
                        className="done"
                    >
                        shop now
                    </Button>
                    </Box>
                </SwiperSlide>
                
                <SwiperSlide  className="parent-slider">
                    <img src="src\images\AdobeStock_439372115_Preview (1).jpeg" alt="" />
                    <Box
                    sx={{
                        
                        position: "absolute",
                        left: "10%",
                        textAlign: "left",
                    }}

                    
                    >
                    <Typography
                        sx={{
                        color: "#222",
                        }}
                        variant="h5"
                        className="done"
                    >
                        LIFESTYLE COLLECTION
                    </Typography>

                    <Typography
                        sx={{
                        color: "#222",
                        fontWeight: "bold",
                        my: 1,
                        }}
                        variant="h3"
                        className="done"
                    >
                        KIDS
                    </Typography>

                    <Stack
                        sx={{
                        justifyContent: { xs: "center", sm: "left" },
                        }}
                        direction={"row"}
                        alignItems={"center"}
                        className="done"
                    >
                        <Typography className="done" color={"#333"} mr={1} variant="h4">
                        SALE UP TO
                        </Typography>
                        <Typography className="done" color={"#D23F57"} variant="h4">
                        30% OFF
                        </Typography>
                    </Stack>
                    <Typography
                        sx={{
                        color: "#000",
                        fontWeight: 300,
                        my: 1,
                        }}
                        variant="body1"
                        className="done Box"
                    >
                        Get Free Shipping on orders over $99.00
                    </Typography>

                    <Button
                        sx={{
                        px: 5,
                        py: 1,
                        marginTop:"-4px",
                        backgroundColor: "#0fdada",
                        boxShadow: "0px 0px 6px 1px aqua",
                        color: "#fff",
                        borderRadius: "1px",
                        "&:hover": {
                            bgcolor: "#27e6e6",
                            boxShadow: "0px 0px 1px 1px aqua",
                        },
                        }}
                        variant="contained"
                        className="done"
                    >
                        shop now
                    </Button>
                    </Box>
                </SwiperSlide>             
        </Swiper>



            <Box sx={{display: {xs:"none",mt:"5px",md:"block", minWidth:"26.42%"}}}>
                <Box sx={{position:"relative",}}>
                    <img width={"100%"} style={{borderRadius:"10px",border: "0.5px solid aqua"}} src="src\images\banner-17.jpg" alt=""/>
                        <Stack sx={{position:"absolute",top:"40%",transform: "TranslateY(-50%)",left:25}}>
                            <Typography sx={{color:"#000"}}>
                                NEW ARRIVALS
                            </Typography>
                            <Typography sx={{color:"#000"}}>
                                SUMMER
                            </Typography>
                            <Typography variant="h6" sx={{color:"#000"}}>
                                SALE 20% OFF
                            </Typography>
                            <Link
                            sx={{color:"#000",display:"flex",alignItems:"center",gap:"5px",transition:"0.2s",
                                "&:hover":{
                                    color:"#00000057"
                                }  ,}}   href="#" underline="none" >
                                    SHOP NOW
                                    <ArrowForwardIcon />
                            </Link>
                        </Stack>

                </Box>
                <Box sx={{position:"relative"}}>
                    <img width={"100%"} style={{borderRadius:"10px",border: "0.5px solid aqua"}} src="src\images\banner-16.jpg" alt="" />
                    <Stack sx={{position:"absolute",top:"40%",transform: "TranslateY(-50%)",left:25}}>
                            <Typography sx={{color:"#000"}}>
                                GAMEING 4K
                            </Typography>
                            <Typography sx={{color:"#000"}}>
                                DEASKTOPS &
                            </Typography>
                            <Typography variant="body1" sx={{color:"#000"}}>
                                LAPTOPS
                            </Typography>
                            <Link
                            sx={{color:"#000",display:"flex",alignItems:"center",gap:"5px",transition:"0.2s",
                                "&:hover":{
                                    color:"#00000057"
                                }  ,}}   href="#" underline="none" >
                                    SHOP NOW
                                    <ArrowForwardIcon />
                            </Link>
                        </Stack>
                </Box>
            </Box>
        </Box>
            <IconSection/>
        </Container>
    )
    }

export default hero
