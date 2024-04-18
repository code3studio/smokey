import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints:{
        values:{
            xs: 0,
            sm: 760,
            md: 1300,
            lg: 1536,
            xl: 1918,
        }
       },
    typography:{
        fontFamily:'Forestana',
        
    }
})

theme.typography.h2 = {
    fontSize: '60px',
    [theme.breakpoints.down('sm')]:{
        fontSize:'40px'
    }
    
  };
theme.typography.h4 = {
    fontSize: '40px',
    [theme.breakpoints.down('sm')]:{
        fontSize:'30px'
    }
    
  };
theme.typography.body1 = {
    fontSize: '20px',
    [theme.breakpoints.down('sm')]:{
        fontSize:'20px'
    },
    fontFamily: "Altone Trial-Bold",
  };