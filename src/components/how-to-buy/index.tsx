import { Box, Button, Card, CardActionArea, CardHeader, CardMedia, Grid, Typography, useMediaQuery, useTheme } from '@mui/material'
import MotionWrapper from '../motion-wrapper'

type Props = {}

const HowToBuy = (_props: Props) => {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleCopyText = () => {
    const textToCopy = import.meta.env.VITE_CONTRACT_ADDRESS;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied successfully");
      })
      .catch((err) => {
        console.error("Unable to copy text: ", err);
      });
  };  function abbreviateString(str: string, maxLength = 10) {
    if (str.length <= maxLength) {
      return str; //
    }
    const firstPart = str.substring(0, 10);
    const lastPart = str.substring(str.length - 10);
    return `${firstPart} ... ${lastPart}`;
  }

  return (
    <Box sx={{px:{md:4,sm:2,xs:2}}}>
    <MotionWrapper position={false}>
      <Grid container justifyContent={"center"} mt={4}>
        <Typography variant="h3" mb={4}>$Smokey</Typography>
      </Grid>
      <Grid container justifyContent={"center"} >
        <Grid item md={6} sm={10} xs={12} >

      <Card sx={{bgcolor:"#FF9204",borderRadius:12,width:"100%"}} >
        <CardHeader title="Contract Address"/>
         
        <CardMedia component='img' image={"assets/10.png"} height={isMobile ? 300:600}/>
        <CardActionArea sx={{py:6}}>
          <Grid container justifyContent={"space-around"} alignItems={"center"} flexDirection={isMobile?"column" :"row"}>

          <Typography mb={isMobile ? 4:0}>{!isMobile ?import.meta.env.VITE_CONTRACT_ADDRESS:  abbreviateString(import.meta.env.VITE_CONTRACT_ADDRESS)}</Typography>
          <Button onClick={handleCopyText} sx={{fontSize:"26px", textTransform:'capitalize',backgroundImage:'url(assets/btnback2.webp)' ,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'contain', width:120}}>Copy</Button>
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