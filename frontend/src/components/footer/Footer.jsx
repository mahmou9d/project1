import { Box, Typography,Button } from "@mui/material"


    function Footer() {
    return (
        <Box sx={{
            
            bgcolor:"#00c7c7",
            py:1.3,
            borderTopLeftRadius:8,
            borderTopRightRadius:8
        }}  >
        <Typography
        sx={{display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:20}} variant="h6">
        Designed and developed by
        <Button variant="text" sx={{mx:0.5,fontSize:"15px",fontWeight:700,textTransform:"capitalize",color:"red"}}>
mahmoud
        </Button>
        ©2023
        </Typography>
        </Box>
    )
    }

export default Footer

