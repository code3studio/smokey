import { Grid, IconButton, Typography } from '@mui/material'
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";

type Props = {}

const Footer = (_props: Props) => {
  return (
    <Grid container justifyContent={"space-around"} py={4}>
        <Grid item>
            <Typography variant='h5'>Smokey</Typography>
        </Grid>
        <Grid item>
        {/* <Box > */}
          <IconButton>
            <TelegramIcon color='success'/>
          </IconButton>
          <IconButton sx={{ml:4}}>
            <XIcon color="success"/>
          </IconButton>
        {/* </Box> */}
        </Grid>
    </Grid>
  )
}

export default Footer