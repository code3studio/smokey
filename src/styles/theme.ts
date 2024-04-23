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
        
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    ":focus":{
                        outline:'none !important',

                    },
                    ":active":{
                        outline:'none !important'
                    },
                    color:'white'
                }
            }
        }
    }
})

theme.typography.h2 = {
    fontSize: '70px',
    [theme.breakpoints.down('sm')]:{
        fontSize:'40px'
    }
    
  };
theme.typography.h4 = {
    fontSize: '50px',
    [theme.breakpoints.down('sm')]:{
        fontSize:'30px'
    }
    
  };
theme.typography.body1 = {
    fontSize: '24px',
    [theme.breakpoints.down('sm')]:{
        fontSize:'20px'
    },
    fontFamily: "Altone Trial-Bold",
  };