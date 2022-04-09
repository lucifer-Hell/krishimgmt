import { AppBar, Box,Card,Grid ,IconButton, InputAdornment, InputBase, Paper, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import Input from '@mui/material/Input';
import DownloadIcon from '@mui/icons-material/Download';
export const FormMui=()=>{
    return (
        <Box m={2} maxWidth={"70%"}>
         <AppBar position="static" style={{"backgroundColor":"#F3C5E6","color":"black",borderRadius:" 26px 4px 4px 4px",display:"flex",flexDirection:"row"}}>

                         <Typography variant="text" component="div" sx={{marginRight:"auto",padding:"0.6em",fontWeight:"medium",display:"inline-block"}}>
                            Search
                        </Typography>
                        <IconButton  fontSize="small" style={{"backgroundColor":"#F946C6",margin:".4em","marginRight":".4em"}}>
                            <SearchIcon fontSize="small" sx={{color:"white"}}  />
                        </IconButton>
                        <IconButton  fontSize="small" style={{"backgroundColor":"#A690E3",margin:".4em","marginRight":".4em"}}>
                            <EditIcon fontSize="small" sx={{color:"white"}}  />
                        </IconButton>
                        
         </AppBar>
         <Paper elevation={3} sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
             <Box component="div" sx={{display:"flex",borderRadius:"19px",justifyContent:"center",padding:"0.3em" ,margin:2}} style={{"width":"100%"}}>
                  <InputBase placeholder="Search here..." sx={{backgroundColor:"#FAFAFA",width:"80%",height:"3em",borderRadius:6,paddingLeft:2}} 
                    endAdornment={
                        <InputAdornment position="end">
                             <IconButton  style={{"backgroundColor":"#EEE8E4","borderRadius":"6px"}}>
                                <SearchIcon sx={{color:"white",fontSize:30}}  />
                            </IconButton>
                        </InputAdornment>
                    }
                 />   
             </Box>

           
             <Card variant="outlined" sx={{width:"70%",margin:"1em",display:"flex",justifyContent:"space-between",backgroundColor:"#E1F0DC",borderRadius:"21px",boxShadow:3}}>
                 <Typography component="span" variant="h6" style={{margin:"0.2em",marginLeft:"0.8em",padding:"0.2em"}}>
                    Bitter Gourd - vidhi ke upyog hetupokkopkpo pokpo pokpok pokpok pokpok
                 </Typography>
                 <div style={{"margin":"1em"}}>
                    <IconButton  fontSize="small" style={{"backgroundColor":"#A690E3",margin:".1em","marginRight":".4em"}}>
                            <EditIcon fontSize="small" sx={{color:"white"}}  />
                    </IconButton>
                    <IconButton  fontSize="small" style={{"backgroundColor":"#A690E3",margin:".1em","marginRight":".4em"}}>
                            <DownloadIcon fontSize="small" sx={{color:"white"}}  />
                    </IconButton>
                    
                 </div>
                 

             </Card>
             <Card variant="outlined" sx={{width:"70%",margin:"1em",display:"flex",justifyContent:"space-between",backgroundColor:"#E1F0DC",borderRadius:"21px",boxShadow:3}}>
                 <Typography component="span" variant="h6" style={{margin:"0.2em",marginLeft:"0.8em",padding:"0.2em"}}>
                    Bitter Gourd - vidhi ke upyog hetupokkopkpo pokpo pokpok pokpok pokpok
                 </Typography>
                 <div style={{"margin":"1em"}}>
                    <IconButton  fontSize="small" style={{"backgroundColor":"#A690E3",margin:".1em","marginRight":".4em"}}>
                            <EditIcon fontSize="small" sx={{color:"white"}}  />
                    </IconButton>
                    <IconButton  fontSize="small" style={{"backgroundColor":"#A690E3",margin:".1em","marginRight":".4em"}}>
                            <DownloadIcon fontSize="small" sx={{color:"white"}}  />
                    </IconButton>
                    
                 </div>
                 

             </Card>
             <Card variant="outlined" sx={{width:"70%",margin:"1em",display:"flex",justifyContent:"space-between",backgroundColor:"#E1F0DC",borderRadius:"21px",boxShadow:3}}>
                 <Typography component="span" variant="h6" style={{margin:"0.2em",marginLeft:"0.8em",padding:"0.2em"}}>
                    Bitter Gourd - vidhi ke upyog hetupokkopkpo pokpo pokpok pokpok pokpok
                 </Typography>
                 <div style={{"margin":"1em"}}>
                    <IconButton  fontSize="small" style={{"backgroundColor":"#A690E3",margin:".1em","marginRight":".4em"}}>
                            <EditIcon fontSize="small" sx={{color:"white"}}  />
                    </IconButton>
                    <IconButton  fontSize="small" style={{"backgroundColor":"#A690E3",margin:".1em","marginRight":".4em"}}>
                            <DownloadIcon fontSize="small" sx={{color:"white"}}  />
                    </IconButton>
                    
                 </div>
                 

             </Card>
         </Paper>

        </Box>
    )
}