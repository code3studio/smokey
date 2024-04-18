import {motion} from 'framer-motion'
type Props = {
    img:string
}

const TokenItem = ({img}: Props) => {
  return (
    <motion.img initial={{ rotate:0}}  whileHover={{ transition:{duration:0.2},rotate: [ 0, 10]}} src={img} style={{borderRadius:"0px 80px "}} alt="img" width={"100%"}/>
  )
}

export default TokenItem