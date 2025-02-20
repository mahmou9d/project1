// import { Box, Button, Stack, Typography } from "@mui/material"
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


// function ProductDetails() {
//     return (
//         <Box display={"flex"}alignItems={"center"} gap={"20px"} sx={{flexDirection:{xs:"column",sm:"row"},border:"1px solid aqua",pb:"12px",px:"5px"}}>
//             <Box>
//                 <img className="aaaa" width={400} height={400} src="src\components\main\banner-15.jpg" alt="" />
//             </Box>
//             <Box sx={{textAlign:{xs:"center",sm:"left"}}}>
//                 <Typography variant="h5">
//                     men fashion
//                 </Typography>
//                 <Typography my={0.5} fontSize={"22px"} color="red">
//                     $12.99
//                 </Typography>
//                 <Typography fontSize={"13px"} sx={{display:"flex",flexWrap:"wrap",}}>
//                     Lorem ipsum, dolor sit amet
//                     consectetur adipisicing elit. Accusantium, fuga.
//                 </Typography>
//                 <Stack direction={"row"} gap={1} my={2}>
                    
//                     {["src\\components\\main\\banner-15.jpg","src\\components\\main\\AdobeStock_439372115_Preview.jpeg","src\\components\\main\\AdobeStock_439372115_Preview.jpeg"].map((item) => {
//                         return(


//                             <img  key={item} src={item} alt="" style={{ borderRadius: 3 }} height={100}width={100}/>
//                         )
//                     }
//                     )}
//                 </Stack>
//                 <Button onClick={() => {
                
//                 }
//                 }
//                 variant="contained" sx={{textTransform:"capitalize"}}>
//                 <AddShoppingCartIcon sx={{mr:"10px"}}/>
//                 add to card
//                 </Button>
//             </Box>
//         </Box>
//     )
// }

// export default ProductDetails
// {/* <Dialog
//                     sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },height:"600px",borderRadius:"" }}
//                     open={open}
//                     onClose={handleClose}
//                     aria-labelledby="alert-dialog-title"
//                     aria-describedby="alert-dialog-description"
//                 >
//                     <IconButton sx={{
//                         ":hover": {color:"#bfffff"},position: "absolute",top:0,right:0}}  onClick={handleClose}>
//                         <CloseIcon sx={{color:"aqua",":hover":{color:"#bfffff"}}}/>
//                         </IconButton>
//                         {/* <ProductDetails/> */}
//                         <Box display={"flex"}alignItems={"center"} gap={"20px"} sx={{flexDirection:{xs:"column",sm:"row"},border:"1px solid aqua",pb:"12px",px:"5px"}}>
//             <Box>
//                 <img className="aaaa" width={400} height={400} src="src\components\main\banner-15.jpg" alt="" />
//             </Box>
//             <Box sx={{textAlign:{xs:"center",sm:"left"}}}>
//                 <Typography variant="h5">
//                     men fashion
//                 </Typography>
//                 <Typography my={0.5} fontSize={"22px"} color="red">
//                     $12.99
//                 </Typography>
//                 <Typography fontSize={"13px"} sx={{display:"flex",flexWrap:"wrap",}}>
//                     Lorem ipsum, dolor sit amet
//                     consectetur adipisicing elit. Accusantium, fuga.
//                 </Typography>
//                 <Stack direction={"row"} gap={1} my={2}>
                    
//                     {["src\\components\\main\\banner-15.jpg","src\\components\\main\\AdobeStock_439372115_Preview.jpeg","src\\components\\main\\AdobeStock_439372115_Preview.jpeg"].map((item) => {
//                         return(


//                             <img  key={item} src={item} alt="" style={{ borderRadius: 3 }} height={100}width={100}/>
//                         )
//                     }
//                     )}
//                 </Stack>
//                 <Button onClick={() => {
                
//                 setCount(count+1)
//                 setData(item)
//                 }
//                 }
//                 variant="contained" sx={{textTransform:"capitalize"}}>
//                 <AddShoppingCartIcon sx={{mr:"10px"}}/>
//                 add to card
//                 </Button>
//             </Box>
//                         </Box>
//             </Dialog> */}
{/* {count==0? null: 

    <Dialog
            
                open={ope}
                onClose={handleClos}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                        
                            
                        <IconButton sx={{
                        ":hover": {color:"#bfffff"},position: "absolute",top:0,right:0}}  onClick={handleClos}>
                        <CloseIcon sx={{color:"aqua",":hover":{color:"#bfffff"}}}/>
                        </IconButton>
                        <Box sx={{width:"680px",height:"130px",display:"flex",justifyContent:"space-between",mt:"-420px"}}>

                        <img  style={{borderRadius:"10px",border:"1px solid aqua"}} width={200}
// @ts-ignore
                        src={daee} alt="" />
<img  style={{borderRadius:"10px",border:"1px solid aqua"}} width={200}
// @ts-ignore
                        src={daee} alt="" />

                            <Typography fontSize={40}>
                            {
// @ts-ignore
                            count=="0"? null: count}
                            </Typography>
                            <Box sx={{ width:"10px"}}>
                            <button onClick={() => {
                                count==0 ? null:setCount(count+1)
                        }
                            
                            }    style={{width:75,height:40,fontSize:26,backgroundColor:"aqua"}}>
                                +
                            </button> 
                            <button onClick={() => {
                                count==0 ? null:setCount(count-1)
                        }} style={{width:75,height:40,fontSize:26,backgroundColor:"aqua"}}>
                                -
                            </button>
                        </Box>
                        </Box>
                    
                        <label htmlFor="text">title</label>
                        <input placeholder="title" required type="email" name="email" id="email"></input>
                        <label htmlFor="number">number</label>
                        <input placeholder="number" required type="number" name="number" id="number"></input>
                        
                    
            </Dialog>

} */}