import { DialogContent, Typography } from '@mui/material';
import Welcome from '../../assets/website/website.png';
import { motion } from 'framer-motion';

type Props = {};

const WelcomePopup = (_props: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
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
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <DialogContent style={{ width: '600px', padding: '16px', minWidth: '100%', textAlign: 'center' }}>
        <div style={{ width: '95%', margin: '0 auto' }}>
          <img src={Welcome} alt='welcome' style={{ width: '100%', borderRadius: '16px' }} />
        </div>
        <div>
          <Typography variant='h4' color="#f8eacb" style={{ fontSize: '2rem' }}>Help! Smokey Needs You to save the Forest!</Typography>
        </div>
      </DialogContent>
    </motion.div>
  );
}

export default WelcomePopup;
