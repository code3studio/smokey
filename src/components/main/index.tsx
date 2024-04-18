import { Box, Grid, Typography, styled, useMediaQuery, useTheme } from "@mui/material";
import Logo from "../../assets/branding/logo.png";
import { motion } from "framer-motion";
type Props = {};

const Root = styled(Box)(({}) => ({
  background: `
      linear-gradient(#f8eacb, rgba(248, 233, 201, 0) 33%), 
      linear-gradient(180deg, rgba(37, 30, 25, 0) 35%, #251e19),
      url(assets/website/mainsection.webp)
    `,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  // width: "calc(100vw - 10px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const MainSection = (_props: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Root>
      <Grid container justifyContent={"center"} alignItems={"center"} direction="column" sx={{px:2}}>
        <motion.img
          src={Logo}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          alt="brand"
          width={isMobile ? 150:300}
        />
        {/* <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item md={2}> */}
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2">Smokey Bear lives within us all</Typography>
        </motion.div>
        {/* </Grid> */}
        {/* <Grid item md={2}> */}
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h4" mb={4}>we need you to prevent wildfires</Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: "600px" }}
        >
          <Typography
            variant="body1"
            align="center"
           
          >
            Ladies and gentlemen, meet <strong>Smokey the Bear</strong> – forest
            guardian and fashion icon with a hat fiercer than a grizzly's growl.
            With his steely gaze and a paw that points with purpose, Smokey
            stands ready to battle the blazes threatening our beloved forests.
            But here's the catch – he needs your help! So, let's team up with
            Smokey, douse those flames, and keep those forests standing tall and
            proud!
          </Typography>
        </motion.div>

        {/* </Grid> */}
        {/* </Grid> */}
      </Grid>
    </Root>
  );
};

export default MainSection;
