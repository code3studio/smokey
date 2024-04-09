import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import Logo from '../../assets/branding/logo.png'

type Props = {};

const Header = (_props: Props) => {
  return (
    <AppBar sx={{ background: "transparent", boxShadow: "none" }}>
      <Toolbar>
        <img src={Logo} alt="logo" width={50}/>
        <Typography variant="h3" ml={2}>Smokey</Typography>
        <Box flexGrow={1} />
        <Box >
          <IconButton>
            <TelegramIcon />
          </IconButton>
          <IconButton sx={{ml:4}}>
            <XIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
