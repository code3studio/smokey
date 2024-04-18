import { Box, Button, Card, CardActionArea, CardHeader, CardMedia, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import HowToBuyImg from '../../assets/illustrations/10.png'
import MotionWrapper from '../motion-wrapper'
type Props = {}

const HowToBuy = (_props: Props) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{px:{md:10,sm:2,xs:2}}}>
    <MotionWrapper position={false}>
      <Grid container justifyContent={"center"} mt={4}>
        <Typography variant="h3" mb={4}>$Smokey</Typography>
      </Grid>
      <Grid container justifyContent={"center"} >
        <Grid item md={6} sm={8} xs={12} >

      <Card sx={{bgcolor:"#FF9204",borderRadius:12,width:"100%"}} >
        <CardHeader title="Contract Address"/>
         
        <CardMedia component='img' image={"assets/10.png"} height={isMobile ? 300:600}/>
        <CardActionArea sx={{py:6}}>
          <Grid container justifyContent={"space-around"} alignItems={"center"} flexDirection={isMobile?"column" :"row"}>

          <Typography mb={isMobile ? 4:0}>{!isMobile ?"35K6HADRfyFig32ubnNHaL9G9WzdPHm4qjhnzDtXtdsa":"35K6HADRfyFig...hnzDtXtdsa"}</Typography>
          <Button variant='outlined' sx={{fontSize:"26px", textTransform:'capitalize'}}>Copy</Button>
          </Grid>
          
        </CardActionArea>
      </Card>
        </Grid>
      </Grid>
      {/* <img src={HowToBuyImg} alt="smokey" width={600} /> */}
    </MotionWrapper>
    </Box>
  )
}

export default HowToBuy