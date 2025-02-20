import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Zoom, useScrollTrigger } from "@mui/material";

const ScrollToTop = () => {
    return (
        <Zoom in={useScrollTrigger({ threshold: 100 })}>
        <Fab
            onClick={() => {
            window.scrollTo(0, 0);
            }}
            variant="extended"
            size="small"
            sx={{ position: "fixed", bottom: 33, right: 33,":hover":{bgcolor:"#01cfcf !important"},bgcolor:"#009d9d" }}
            color="primary"
            aria-label="add"
        >
            <KeyboardArrowUp sx={{color:"#fff !important",}} fontSize="medium" />
        </Fab>
        </Zoom>
    );
};

export default ScrollToTop;









