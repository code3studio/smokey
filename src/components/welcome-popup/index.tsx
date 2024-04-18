import { DialogActions, DialogContent, Grid, Typography } from '@mui/material'
import Welcome from '../../assets/website/website.png'
import {motion} from 'framer-motion'

type Props = {}

const WelcomePopup = (_props: Props) => {
  return (
    <motion.div  initial={{ opacity: 0, scale: 0 }}
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
    }}>
    <DialogContent>
        
        <img src={Welcome} width={800} alt='welcome' style={{borderRadius:'16px'}} />
    </DialogContent>
    <DialogActions >
        <Grid container justifyContent={"center"} alignItems={"center"}>

        <Typography variant='h4' color={"chartreuse"}>Help! Smokey Needs You to save the Forest!</Typography>
        </Grid>
    </DialogActions>
    </motion.div>
  )
}

export default WelcomePopup