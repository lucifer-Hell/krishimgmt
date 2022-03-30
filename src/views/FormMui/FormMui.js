import { AppBar, Box,Card,Grid ,IconButton, InputBase, Paper, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import Input from '@mui/material/Input';
export const FormMui=()=>{
    return (
        <Box m={2}>
         <AppBar position="static" style={{"backgroundColor":"#F3C5E6","color":"black",borderRadius:" 26px 4px 4px 4px",display:"flex",flexDirection:"row"}}>

                         <Typography variant="text" component="div" sx={{marginRight:"auto",padding:"0.6em",fontWeight:"medium",display:"inline-block"}}>
                            Search
                        </Typography>
           
                        <IconButton  fontSize="small" style={{"backgroundColor":"#F946C6",margin:".1em","marginRight":".4em"}}>
                            <SearchIcon fontSize="small" sx={{color:"white"}}  />
                        </IconButton>
                        <IconButton  fontSize="small" style={{"backgroundColor":"#A690E3",margin:".1em","marginRight":".4em"}}>
                            <EditIcon fontSize="small" sx={{color:"white"}}  />
                        </IconButton>
                        
         </AppBar>
         <Paper elevation={3}>
             <Box  component="container" sx={{backgroundColor:"#FAFAFA" , width:"60%",borderRadius:"19px" }}>
                  <InputBase placeholder="Search here..." sx={{backgroundColor:"#FAFAFA"}} />
                  <IconButton  fontSize="small" style={{"backgroundColor":"#EEE8E4",margin:".1em","marginRight":".4em",borderRadius:"13px"}}>
                            <SearchIcon fontSize="small" sx={{color:"white"}}  />
                  </IconButton>
             </Box>
           
         </Paper>

        </Box>
    )
}