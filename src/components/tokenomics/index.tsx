import MotionWrapper from "../motion-wrapper";
import Illustrations from "../../assets/illustrations/1.png";
import { Grid, Typography } from "@mui/material";
type Props = {};

const Tokenomics = (_props: Props) => {
  return (
    <MotionWrapper position={true}>
      <Grid container justifyContent={"center"}>
        <Typography variant="h3">Tokenomics</Typography>
      </Grid>
      <img src={Illustrations} alt="illu" width={600} />
    </MotionWrapper>
  );
};

export default Tokenomics;
