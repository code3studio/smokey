import { Box, Grid, Typography, styled } from "@mui/material";
import Logo from "../../assets/branding/logo.png";
import { motion } from "framer-motion";
type Props = {};

const Root = styled(Box)(({  }) => ({
  background: `
      linear-gradient(#f8eacb, rgba(248, 233, 201, 0) 33%), 
      linear-gradient(180deg, rgba(37, 30, 25, 0) 35%, #251e19),
      url(assets/website/mainsection.webp)
    `,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  width: "calc(100vw - 10px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const MainSection = (_props: Props) => {
  return (
    <Root>
      <Grid container justifyContent={"center"}>
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
          width={300}
        />
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item md={2}>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography variant="h2">
                Smokey Bear lives within us all
              </Typography>
            </motion.div>
          </Grid>
          <Grid item md={2}>
          <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
            <Typography variant="h4">
              we need you to prevent wildfires
            </Typography>
            </motion.div>

          </Grid>
        </Grid>
      </Grid>
    </Root>
  );
};

export default MainSection;
