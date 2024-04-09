import MotionWrapper from "../motion-wrapper";
import Illustrations from "../../assets/website/fire.webp";
import { Grid, Typography } from "@mui/material";
type Props = {};

const Tokenomics = (_props: Props) => {
  return (
    <MotionWrapper position={true}>
      <Grid container justifyContent={"center"}>
        <Typography variant="h3">Tokenomics</Typography>
      </Grid>
      <Grid container >
        <Grid item md={6}>

      <img src={Illustrations} alt="illu" />
        </Grid>
        <Grid item md={6} >
        <Typography>Burn: 1B</Typography>

        </Grid>
      </Grid>
      
    </MotionWrapper>
  );
};

export default Tokenomics;
