import MotionWrapper from "../motion-wrapper";
import { Box, Grid, Typography } from "@mui/material";
import Token1 from '../../assets/token/1.png'
import Token2 from '../../assets/token/2.png'
import Token3 from '../../assets/token/3.png'
import Token4 from '../../assets/token/4.png'
import TokenItem from "./TokenItem";
type Props = {};

const Tokenomics = (_props: Props) => {
  return (
    <Box sx={{px:{md:10,sm:2,xs:2}}}>

    <MotionWrapper position={true}>
      <Grid container justifyContent={"center"}>
        <Typography variant="h3" mb={4}>Tokenomics</Typography>
      </Grid>
      <Grid container spacing={{md:8,sm:6,xs:2}}>
        <Grid item md={6} lg={3} sm={6} xs={12}>
          <TokenItem img={Token1}/>
        </Grid>
        <Grid item md={6} mt={{lg:20}} lg={3} sm={6} xs={12}>
          <TokenItem img={Token2}/>

        </Grid>
        <Grid item md={6} lg={3} sm={6} xs={12}>
          <TokenItem img={Token3}/>

        </Grid>
        <Grid item md={6} mt={{lg:20}} lg={3} sm={6} xs={12}>
          <TokenItem img={Token4}/>

        </Grid>
      </Grid>
      
    </MotionWrapper>
    </Box>
  );
};

export default Tokenomics;
