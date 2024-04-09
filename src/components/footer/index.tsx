import { Grid, IconButton, Typography } from '@mui/material'
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";

type Props = {}

const Footer = (_props: Props) => {
  return (
    <Grid container justifyContent={"space-around"}>
        <Grid item>
            <Typography>Smokey</Typography>
        </Grid>
        <Grid item>
        {/* <Box > */}
          <IconButton>
            <TelegramIcon />
          </IconButton>
          <IconButton sx={{ml:4}}>
            <XIcon />
          </IconButton>
        {/* </Box> */}
        </Grid>
    </Grid>
  )
}

export default Footer