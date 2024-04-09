import { Grid, Typography } from '@mui/material'
import HowToBuyImg from '../../assets/illustrations/2.png'
import MotionWrapper from '../motion-wrapper'
type Props = {}

const HowToBuy = (_props: Props) => {
  return (
    <MotionWrapper position={false}>
      <Grid container justifyContent={"center"}>
        <Typography variant="h3">How To Buy</Typography>
      </Grid>
      <img src={HowToBuyImg} alt="illu" width={600} />
    </MotionWrapper>
  )
}

export default HowToBuy